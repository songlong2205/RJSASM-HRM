import React, { Component } from 'react';
import Home from './HomeComponent';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import { STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            // selectedStaff: null
        };
    }

    onStaffSelect(staffId) {
        this.setState({ selectedStaff: staffId });
    }

    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/stafflist" component={() => <StaffList staffs={this.state.staffs} />} /> 
                    <Redirect to="/home" />
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
