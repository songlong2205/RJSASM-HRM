import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";

function RenderStaffInfo({ staff, onClick }) {
    return (
        <Card onClick={() => onClick(staff.id)}>
            <CardImg src={staff.image} />
            <p style={{ textAlign: "center" }}>{staff.name}</p>
        </Card>
    );
}
const StaffList = (props) => {

    const list = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-md-4 col-6 col-sm-6">
                <RenderStaffInfo staff={staff} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container-fluid">
            <h4>Bấm vào tên nhân viên để xem thông tin :</h4>
            <hr />
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