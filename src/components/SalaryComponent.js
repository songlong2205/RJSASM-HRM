import React from "react";
import { Alert, Card } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderStaffSalary({ salary }) {
    return (
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translate(200%)'
            }}>
            <Card className="m-2">
                <h2 style={{ textAlign: "left", color: "black" }}>{salary.name}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12 col-sm-12">
                            <p>Mã nhân viên : {salary.id}</p>
                            <p>Hệ số lương : {salary.salaryScale}</p>
                            <p>Số giờ làm thêm : {salary.overTime}</p>
                            <p>Lương cơ bản : {salary.salary}</p>
                            <Alert ><b>Lương : {((salary.salaryScale * salary.salary) + (salary.overTime * (200000 / 8))).toLocaleString("vi")}</b></Alert>
                        </div>
                    </div>
                </div>
            </Card>
        </FadeTransform>
    );
}
const Salary = (props) => {

    const salary = props.salary.map((staffSalary) => {
        return (
            <div key={staffSalary.id} className="col-lg-4 col-md-6 col-12 col-sm-12">
                <RenderStaffSalary salary={staffSalary} />
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
                {salary}
            </div>
        </div>
    );
}

export default Salary;