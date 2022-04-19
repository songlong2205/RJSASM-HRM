import React, { Component } from 'react';
import DeptList from './DeptCompoent';
import DeptInfo from './DeptInfoComponent';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff, fetchDepartments, fetchSalary, fetchStaffs } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        staffsSalary: state.staffsSalary
    }
}
const mapDispatchToProps = (dispatch) => ({
    // addStaff: (staff) => {
    //     dispatch(addStaff(staff))
    // },
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    fetchSalary: () => { dispatch(fetchSalary()) }

})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDepartments();
        this.props.fetchSalary();
        this.props.fetchStaffs();
    }

    render() {
        const Department = () => {
            return (
                <DeptList dept={this.props.departments.departments}
                    />
            );
        }

        const StaffWithId = ({ match }) => {
            return (
                <StaffInfo staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
                    dept={this.props.departments.departments}
                />
            );
        }
        const DeptWithId = ({ match }) => {
            return (
                <DeptInfo dept={this.props.departments.departments.filter((dept) => dept.id === match.params.deptId)[0]}
                    staffs={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.deptId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/salary" component={() => <Salary salary={this.props.staffsSalary.staffsSalary} />} />
                    <Route path="/department" component={Department} />
                    <Route path="/departments/:deptId" component={DeptWithId} />
                    <Route path="/stafflist/:staffId" component={StaffWithId} />
                    <Route path="/staffList" component={() => <StaffList staffsLoading={this.props.staffs.isLoading} onAdd={this.props.addStaff} staffs={this.props.staffs.staffs} />} />
                    <Redirect to="/stafflist" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
