import React, { Component } from "react";
import { Button, Card, CardImg, Form, Modal, ModalBody, ModalHeader, Row, Label, Col, FormFeedback, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffInfo({ staff }) {
    return (
        <div className="m-1">
            <Card>
                <Link to={`/stafflist/${staff.id}`}>
                    <CardImg src={staff.image} />
                    <p style={{ textAlign: "center", color: "black" }}>{staff.name}</p>
                </Link>
            </Card>
        </div>
    );
}
class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            doB: "",
            salaryScale: 1,
            startDate: "",
            department: "",
            annualLeave: 0,
            overTime: 0,
            salary: 3000000,
            image: '/assets/images/avatar.png',
            touched: {
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false
            },
            nameS: "",
            isModalOpen: false,

        };
        this.toggleModal = this.toggleModal.bind(this);
        this.searchStaff = this.searchStaff.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        const newStaff = {
            name: this.state.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            department: this.state.department,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            image: this.state.image
        };
        this.props.onAdd(newStaff);
    };

    validate(
        name,
        department,
        salaryScale,
        doB,
        startDate,
        annualLeave,
        overTime
    ) {
        const errors = {
            name: "",
            department: "",
            doB: "",
            startDate: "",
            salaryScale: "",
            annualLeave: "",
            overTime: ""
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = "Vui lòng nhập 3 ký tự trở lên";
        else if (this.state.touched.name && name.length > 20)
            errors.name = "Vui lòng nhập dưới 20 ký tự";
        if (this.state.touched.department && department.length < 1)
            errors.department = "Vui lòng chọn";
        if (this.state.touched.salaryScale && salaryScale.length < 1)
            errors.salaryScale = "Vui lòng nhập";
        if (this.state.touched.annualLeave && annualLeave.length < 1)
            errors.annualLeave = "Vui lòng nhập";
        if (this.state.touched.overTime && overTime.length < 1)
            errors.overTime = "Vui lòng nhập";
        if (this.state.touched.doB && doB.length < 1)
            errors.doB = "Vui lòng nhập";
        if (this.state.touched.startDate && startDate.length < 1)
            errors.startDate = "Vui lòng nhập";
        return errors;
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    searchStaff(event) {
        event.preventDefault();
        const nameSearch = event.target.nameSearch.value;
        this.setState({ nameS: nameSearch });
    }

    render() {
        const errors = this.validate(
            this.state.name,
            this.state.department,
            this.state.salaryScale,
            this.state.doB,
            this.state.startDate,
            this.state.annualLeave,
            this.state.overTime
        );

        const staffList = this.props.staffs
            .filter((val) => {
                if (this.state.nameS === "") return val;
                else if (
                    val.name.toLowerCase().includes(this.state.nameS.toLowerCase())
                )
                    return val;
            })
            .map((val) => {
                return (
                    <div key={val.id} className="col-lg-2 col-md-4 col-6 col-sm-6">
                        <RenderStaffInfo staff={val} />
                    </div>
                );
            });

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-10 col-md-10">
                                <h3>Nhân Viên</h3>
                            </div>
                            <div className="col-2 col-auto mt-1">
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-user-plus fa-lg" aria-hidden="true"></span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-1">
                        <form onSubmit={this.searchStaff} className="form-group row">
                            <div className="col-8 col-md-8">
                                <input
                                    type="text"
                                    name="nameSearch"
                                    className="form-control"
                                    placeholder="Tìm kiếm...." />
                            </div>
                            <div className="col-4 col-md-4">
                                <Button className="btn btn-success" type="submit"><span className="fa fa-search"></span></Button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control-group">
                                <Label htmlFor="name" md={4}>
                                    Họ và tên:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        valid={errors.name === ""}
                                        invalid={errors.name !== ""}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="doB" md={4}>
                                    Ngày sinh:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="date"
                                        id="doB"
                                        name="doB"
                                        value={this.state.doB}
                                        valid={errors.doB === ""}
                                        invalid={errors.doB !== ""}
                                        onBlur={this.handleBlur("doB")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="startDate" md={4}>
                                    Ngày vào công ty:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        valid={errors.startDate === ""}
                                        invalid={errors.startDate !== ""}
                                        onBlur={this.handleBlur("startDate")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="department" md={4}>
                                    Phòng ban:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="select"
                                        id="department"
                                        name="department"
                                        className="form-control"
                                        value={this.state.department}
                                        valid={errors.department === ""}
                                        invalid={errors.department !== ""}
                                        onBlur={this.handleBlur("department")}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option></Input>
                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="salaryScale" md={4}>
                                    Hệ số lương:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="salaryScale"
                                        name="salaryScale"
                                        value={this.state.salaryScale}
                                        valid={errors.salaryScale === ""}
                                        invalid={errors.salaryScale !== ""}
                                        onBlur={this.handleBlur("salaryScale")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="annualLeave" md={4}>
                                    Số ngày nghỉ còn lại:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="annualLeave"
                                        name="annualLeave"
                                        value={this.state.annualLeave}
                                        valid={errors.annualLeave === ""}
                                        invalid={errors.annualLeave !== ""}
                                        onBlur={this.handleBlur("annualLeave")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="overTime" md={4}>
                                    Số giờ làm thêm:
                                </Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="overTime"
                                        name="overTime"
                                        value={this.state.overTime}
                                        valid={errors.overTime === ""}
                                        invalid={errors.overTime !== ""}
                                        onBlur={this.handleBlur("overTime")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="modal-footer">
                                <Button type="submit" color="success">
                                    Thêm
                                </Button>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
                <div className="row mt-1 mb-3">
                    {staffList}
                </div>
            </div>
        );
    }
}

export default StaffList;