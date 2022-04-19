import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function RenderStaff({ staff, dept }) {
    return (
        <div className="container m-2">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <Card>
                        <CardImg src={staff.image} />
                    </Card>
                </div>
                <div style={{ margin: "auto" }} className="col-lg-9 col-md-8 col-sm-12">
                    <h4>Họ và tên : {staff.name}</h4>
                    <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
                    <li>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
                    <li>Phòng ban : {dept.name}</li>
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
                </div>
                <div className="col-2 col-auto mt-1">
                    <Button className="btn btn-success" >
                        <span>Cập nhật</span>
                    </Button>
                </div>
                <div className="row">
                    <RenderStaff staff={props.staff}
                        dept={props.dept.filter((depts) => depts.id === props.staff.departmentId)[0]
                        } />
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