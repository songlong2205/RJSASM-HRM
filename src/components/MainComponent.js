import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import { STAFFS } from '../shared/staffs';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            selectedStaff: null
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <StaffList staffs={this.state.staffs}
                    onClick={(staffId) => this.onStaffSelect(staffId)} />
                <StaffInfo
                    staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
