import { Component } from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import StaffList from './StaffListComponent';

class DeptInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/department'>Phòng ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dept.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <StaffList staffs={this.props.staffs} />
                </div>
            </div>
        )
    }
}

export default DeptInfo;