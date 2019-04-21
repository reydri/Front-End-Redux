import { LOADING_EMPLOYEES, LIST_EMPLOYEES_FETCHED, ERROR_LIST_EMPLOYEES } from '../../../constants/types';

const initialState = {
  employees: [],
  loadingEmployees: false,
  errorEmployees: false
};

export default function reducer(state = initialState, action) {
  const { type, employees, loadingEmployees, errorEmployees } = action;

  switch (type) {
    case LOADING_EMPLOYEES:
      return {
        ...state,
        loadingEmployees
      };
    case ERROR_LIST_EMPLOYEES:
      return {
        ...state,
        errorEmployees
      };
    case LIST_EMPLOYEES_FETCHED:
      return {
        ...state,
        employees : employees.Employees
      };
    default:
      return state;
  }
}
