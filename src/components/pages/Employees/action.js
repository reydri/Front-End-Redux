import fetch from '../../../utils/fetch';
import { LOADING_EMPLOYEES, LIST_EMPLOYEES_FETCHED, ERROR_LIST_EMPLOYEES } from '../../../constants/types';
import { SERVICES } from '../../../configs';

export function fetchEmployee() {
  return dispatch => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_EMPLOYEES,
    };
    dispatch(loadingEmployeesAction(true));
    return fetch(options)
      .then(res => {
        dispatch(loadingEmployeesAction(false));
        dispatch(employeesFetchedAction(res));
      }).catch(err => {
        dispatch(loadingEmployeesAction(false));
        dispatch(errorEmployeesAction(err));
      });
  };  
}


function employeesFetchedAction(employees) {
  return {
    type: LIST_EMPLOYEES_FETCHED,
    employees
  };
}

function loadingEmployeesAction(loadingEmployees) {
  return {
    type: LOADING_EMPLOYEES,
    loadingEmployees
  };
}

function errorEmployeesAction(errorEmployees) {
  return {
    type: ERROR_LIST_EMPLOYEES,
    errorEmployees
  };
}
