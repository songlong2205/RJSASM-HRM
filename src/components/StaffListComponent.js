import React, { Component } from "react";
import { Button, Card, CardImg, Form, Modal, ModalBody, ModalHeader, Row, Label, Col, FormFeedback, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function RenderStaffInfo({ staff }) {
    return (
        <div className="m-1">
            <Card>
                <Link to={`/stafflist/${staff.id}`}>
                    <CardImg src={staff.image} />
                    <p style={{ textAlign: "center", color: "black" }}>{staff.name}</p>
                </Link>
                <div style={{ textAlign: "center" }} className="col-auto mt-1">
                    <Button className="btn btn-danger" >
                        <span>Xóa</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}
class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doB: "",
            startDate: "",
            salary: 3000000,
            image: '/assets/images/avatar.png',
            touched: {
                doB: false,
                startDate: false,
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

    handleSubmit = (values) => {
        const newStaff = {
            name: values.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            department: values.department,
            salaryScale: values.salaryScale,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: this.state.image
        };
        this.props.onAdd(newStaff);
    };

    validate(doB, startDate,) {
        const errors = {
            doB: "",
            startDate: "",
        };
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
            this.state.doB,
            this.state.startDate,
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
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="control-group">
                                <Label htmlFor="name" md={4}>
                                    Họ và tên:
                                </Label>
                                <Col md={8}>
                                    <Control.text model=".name" id="name" name="name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3),
                                            maxLength: maxLength(20),
                                        }}
                                    />
                                    <Errors
                                        model=".name"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            minLength: "Vui lòng nhập nhiều hơn 3 ký tự",
                                            maxLength: "Vui lòng nhập ít hơn 20 ký tự"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="doB" md={4}>
                                    Ngày sinh:
                                </Label>
                                <Col md={8}>
                                    <Input type="date" id="doB" name="doB"
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
                                    <Input type="date" id="startDate" name="startDate"
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
                                    <Control.select model=".department" id="department" name="department"
                                        className="form-control"
                                        defaultValue="Sale"
                                    >
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option></Control.select>
                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="salaryScale" md={4}>
                                    Hệ số lương:
                                </Label>
                                <Col md={8}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                        defaultValue="1"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            required: "Vui lòng nhập",
                                            isNumber: "Vui lòng nhập số"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="annualLeave" md={4}>
                                    Số ngày nghỉ còn lại:
                                </Label>
                                <Col md={8}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                        defaultValue="0"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            required: "Vui lòng nhập",
                                            isNumber: "Vui lòng nhập số"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="overTime" md={4}>
                                    Số giờ làm thêm:
                                </Label>
                                <Col md={8}>
                                    <Control.text model=".overTime" id="overTime" name="overTime"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                        defaultValue="0"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            required: "Vui lòng nhập",
                                            isNumber: "Vui lòng nhập số"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="modal-footer">
                                <Button type="submit" color="success">
                                    Thêm
                                </Button>
                            </Row>
                        </LocalForm>
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