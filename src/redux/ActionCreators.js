import * as ActionTypes from './ActionTypes.js';
import { DEPARTMENTS } from '../shared/staffs';
import { baseUrl } from '../shared/baseUrl.js';

// export const addStaff = (staff) => {
//     const id = Math.floor(Math.random() * 10000 + 1);
//     const newStaff = { id, ...staff };
//     return ({
//         type: ActionTypes.ADD_STAFF,
//         payload: newStaff
//     })
// }

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