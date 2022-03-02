import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';

function RenderStaff({ staff }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg src={staff.image} />
                    </Card>
                </div>
                <div style={{ margin: "auto" }} className="col-lg-9 col-md-6 col-sm-12">
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

const StaffInfo = (props) => {
    if (props.staff != null) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/stafflist'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.staff.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderStaff staff={props.staff} />
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


export default StaffInfo;