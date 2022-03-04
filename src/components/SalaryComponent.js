import React from "react";
import { Card} from 'reactstrap';

function RenderStaffInfo({ staff}) {
    return (
        <Card className="m-2">
            <h2 style={{ textAlign: "left", color: "black" }}>{staff.name}</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12 col-sm-12">
                        <p>Mã nhân viên : {staff.id}</p>
                        <p>Hệ số lương : {staff.salaryScale}</p>
                        <p>Số giờ làm thêm : {staff.overTime}</p>
                        <p style={{textAlign: "center", background: "lightGrey"}}>Lương : {(staff.salaryScale * 3000000) + (staff.overTime * (200000/8))}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
const Salary = (props) => {

    const list = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-4 col-md-6 col-12 col-sm-12">
                <RenderStaffInfo staff={staff} />
            </div>
        );
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Bảng lương</h3>
                    <hr />
                </div>
            </div>
            <div className="row mt-1 mb-3">
                {list}
            </div>
        </div>
    );
}

export default Salary;