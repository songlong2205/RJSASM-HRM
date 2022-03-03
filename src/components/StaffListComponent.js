import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';

function RenderStaffInfo({ staff, onClick }) {
    return (
        <Card>
            <Link to={`/stafflist/${staff.id}`}>
                <CardImg src={staff.image} />
                <p style={{ textAlign: "center", color: "black" }}>{staff.name}</p>
            </Link>
        </Card>
    );
}
const StaffList = (props) => {

    const list = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-md-4 col-6 col-sm-6">
                <RenderStaffInfo staff={staff} />
            </div>
        );
    });

    return (
        <div className="container-fluid">
            {/* <h4>Nhân Viên</h4>
            <hr /> */}
            <div className="row">
                {/* <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Staff List</BreadcrumbItem>
                </Breadcrumb> */}
                <div className="col-12">
                    <h3>Nhân Viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row mt-1">
                {list}
            </div>
            {/* <StaffInfo staff={this.state.selectedStaff} /> */}
            {/* <div className="row">
                        {this.renderStaff(this.state.selectedStaff)}
                    </div> */}
        </div>
    );
}

export default StaffList;