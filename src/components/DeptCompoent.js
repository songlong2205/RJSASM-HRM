import React, { Component } from "react";
import { Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderDept = ({ dept }) => {
    return (
        <div className="container-fluid">
            <div>
                <Card className="mt-2">
                    <Link to={`/departments/${dept.id}`}>
                        <CardTitle style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px", color: "black" }}>{dept.name}</CardTitle>
                        <h6 style={{ textAlign: "center", margin: "20px", color: "black" }}>Số lượng nhân viên : {dept.numberOfStaff}</h6>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
class DeptList extends Component {
    constructor(props){
        super(props)
    }
render() {
    const dept = this.props.dept.map((department) => {
        return (
            <div key={department.id} className="col-lg-4 col-md-6 col-12 col-sm-12">
                <RenderDept dept={department} />
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
                {dept}
            </div>
        </div>
    );
}
}
export default DeptList;