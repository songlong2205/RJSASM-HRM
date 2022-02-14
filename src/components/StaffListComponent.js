import React, { Component } from "react";
import { Media } from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12">
                    <p style={{border : '1px solid grey'}}>{staff.name}</p>
                    {/* <Media tag="li">
                        <Media left middle>
                            <Media object src={staff.name} alt={staff.name} />
                        </Media>
                        <Media body className="ml-5">
                                <Media heading>{staff.name}</Media>
                                <p>{staff.overTime}</p>
                        </Media>
                    </Media> */}
                </div>
            );
        });

        return (
            <div className="container-fluid">
                <div className="row mt-1">
                    <Media>
                        {list}
                    </Media>
                </div>
                <p>Bấm vào tên nhân viên để xem thông tin</p>
            </div>
        );

    }
}

export default StaffList;