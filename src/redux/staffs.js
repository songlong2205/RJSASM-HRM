import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            return { ...state, isLoading: false, errMess: null, staffs: action.payload };
        case ActionTypes.STAFFS_LOADING:
            return { ...state, isLoading: true, errMess: null, staffs: [] };
        case ActionTypes.STAFFS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, staffs: [] };

        //ADD STAFF
        case ActionTypes.ADD_STAFF_SUCCESS:
            return { ...state, isLoading: false, staffs: action.payload };

        //DELETE STAFF
        case ActionTypes.DELETE_STAFF_SUCCESS:
            const filteredStaffs = state.staffs.filter((staff) => staff.id !== action.payload);
            return { ...state, isLoading: false, staffs: filteredStaffs };

        case ActionTypes.DELETE_STAFF_LOADING:
            return { ...state, isLoading: true, errMess: null, staffs: [] };
        default:
            return state;
    }
}