import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import StaffInfo from './StaffInfoComponent'

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    // renderStaff(staff) {
    //     if (staff != null) {
    //         return (
    //             <div style={{ margin: "auto" }} className="col-lg-4 col-md-6 col-sm-12">
    //                 <Card>
    //                     <CardImg src={staff.image} />   
    //                     <h4>Họ và tên : {staff.name}</h4>
    //                     <li>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</li>
    //                     <li>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</li>
    //                     <li>Phòng ban : {staff.department.name}</li>
    //                     <li>Chức danh : {staff.role}</li>
    //                     <li>Số ngày nghỉ còn lại : {staff.annualLeave}</li>
    //                     <li>Số ngày đã làm thêm : {staff.overTime}</li>
    //                 </Card>
    //             </div>
    //         );
    //     }
    //     else {
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    render() {

        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-2 col-md-4 col-6 col-sm-6">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardImg src={staff.image} />
                        <p style={{ textAlign: "center" }}>{staff.name}</p>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <h4>Bấm vào tên nhân viên để xem thông tin :</h4>
                <div className="row mt-1">
                    {list}
                </div>
                <StaffInfo staff={this.state.selectedStaff} />
                {/* <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div> */}
            </div>
        );

    }
}

export default StaffList;