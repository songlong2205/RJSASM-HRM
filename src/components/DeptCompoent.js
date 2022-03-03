import React from "react";
import { Card } from 'reactstrap';

function RenderDept({ dept }) {
    return (
        <div className="container-fluid">
            <div>
                <Card className="mt-2">
                    <h4 style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px" }}>{dept.name}</h4>
                    <h6 style={{ textAlign: "center", margin: "20px" }}>Số lượng nhân viên : {dept.numberOfStaff}</h6>
                </Card>
            </div>
        </div>
    );
}
const DeptList = (props) => {

    const department = props.departments.map((dept) => {
        return (
            <div key={dept.id} className="col-lg-4 col-md-6 col-12 col-sm-12">
                <RenderDept dept={dept} />
            </div>
        );
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Phòng ban</h3>
                    <hr />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                {department}
            </div>
        </div>
    );
}

export default DeptList;