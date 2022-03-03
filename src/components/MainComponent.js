import React, { Component } from 'react';
import Home from './HomeComponent';
import DeptList from './DeptCompoent';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
            // selectedStaff: null
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }

    render() {

        const Department = () => {
            return (
                <DeptList departments={this.state.departments} />
            );
        }

        const StaffWithId = ({ match }) => {
            return (
                <StaffInfo staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/departments" component={Department} />
                    <Route exact path="/stafflist" component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path="/stafflist/:staffId" component={StaffWithId} />
                    <Redirect to="/stafflist" />
                </Switch>
                {/* <StaffList staffs={this.state.staffs}
                    onClick={(staffId) => this.onStaffSelect(staffId)} /> */}
                {/* <StaffInfo
                    staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} /> */}
                <Footer />
            </div>
        );
    }
}

export default Main;
