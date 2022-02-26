import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";

class StaffInfo extends Component {

    renderStaff(staff) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div style={{ margin: "auto" }} className="col-lg-3 col-md-6 col-sm-12">
                        <Card>
                            <CardImg src={staff.image} />
                        </Card>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12">
                        <h4>Họ và tên : {staff.name}</h4>
                        <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
                        <li>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
                        <li>Phòng ban : {staff.department.name}</li>
                        <li>Chức danh : {staff.role}</li>
                        <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
                        <li>Số ngày đã làm thêm : {staff.overTime}</li>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.staff != null) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        {this.renderStaff(this.props.staff)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default StaffInfo;