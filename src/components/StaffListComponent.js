import React, {Component} from "react";
import { Button, Card, CardImg, Modal, ModalHeader } from 'reactstrap';
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
            nameF: "",
            isModalOpen: false,
       
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.searchStaff = this.searchStaff.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    searchStaff(event) {
        event.preventDefault();
        const nameS = event.target.nameS.value;
        this.setState({ nameF: nameS });
    }

    render() {
        // const errors = this.validate(this.state.doB, this.state.startDate);

        const staffList = this.props.staffs
            .filter((val) => {
                if (this.state.nameF === "") return val;
                else if (
                    val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
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
    // }

    // render() {
    //     const list = this.props.staffs.map((staff) => {
    //         return (
    //             <div key={staff.id} className="col-lg-2 col-md-4 col-6 col-sm-6">
    //                 <RenderStaffInfo staff={staff} />
    //             </div>
    //         );
    //     });


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
                                    name="nameS"
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
                    <ModalHeader>Thêm nhân viên</ModalHeader>
                </Modal>
                <div className="row mt-1 mb-3">
                    {staffList}
                </div>
            </div>
        );
    }
}

export default StaffList;