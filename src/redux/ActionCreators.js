import * as ActionTypes from './ActionTypes.js';
import { baseUrl } from '../shared/baseUrl.js';
import fetch from 'cross-fetch';

export const addStaffSuccess = (staff) => ({
    type: ActionTypes.ADD_STAFF_SUCCESS,
    payload: staff
});

export const addStaff = (staff) => (dispatch) => {
    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(staff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then((response) => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errmess = new Error(error.messae);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addStaffSuccess(response)))
        .catch(error => {
            console.log('Add staffs ', error.messae)
            alert('Staff could not be posted\nError: ' + error.messae);
        })
}

export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)));
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errMess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errMess
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});

export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(response => response.json())
        .then(staffsSalary => dispatch(addSalary(staffsSalary)));
}

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errMess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errMess
});

export const addSalary = (staffsSalary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: staffsSalary
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)));
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

export const deleteStaffSuccess = (id) => ({
    type: ActionTypes.DELETE_STAFF_SUCCESS,
    payload: id
});

export const deleteStaffLoading = () => ({
    type: ActionTypes.DELETE_STAFF_LOADING,
});

export const deleteStaff = (id) => (dispatch) => {
    if (window.confirm('Bạn có muốn xóa không ?')) {
        return fetch(baseUrl + `staffs/${id}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(deleteStaffSuccess(id)))
    }
}
