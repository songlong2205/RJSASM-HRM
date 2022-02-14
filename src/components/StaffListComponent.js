import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({selectedStaff: staff});
    }

    renderStaff(staff) {
        if (staff != null) {
            return(
                <div style={{margin: "auto"}} className="col-lg-4 col-md-6 col-sm-12">
                <Card>
                    {/* <CardImg width="50%" src={staff.image} alt={staff.name} /> */}
                    
                        <p>Họ và tên : {staff.name}</p>
                        <p>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban : {staff.name}</p>
                        <p>Chức danh : {staff.name}</p>
                        
                        {/* <p>{staff.annualLeave}</p> */}
                        {/* <CardTitle>{staff.name}</CardTitle>
                        <CardText>{staff.annualLeave}</CardText> */}
                    
                </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12">
                    {/* <p onClick={() => this.onStaffSelect(staff)} style={{border : '1px solid grey'}}>{staff.name}</p> */}
                    <Card onClick={() => this.onStaffSelect(staff)}>
                    <p>{staff.name}</p>
                        {/* <CardImg src={staff.image} alt={staff.name} /> */}
                        {/* <CardImgOverlay>
                                <CardTitle>{staff.name}</CardTitle>
                        </CardImgOverlay> */}
                    </Card>
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="row mt-1">
                        {list}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
                <p>Bấm vào tên nhân viên để xem thông tin</p>
            </div>
        );

    }
}

export default StaffList;