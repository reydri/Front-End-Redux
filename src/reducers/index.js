import { combineReducers } from 'redux';
import todo from '../components/pages/Todo/reducer';
import todoUndoRedo from '../components/pages/TodoUndoRedo/reducer';
import employees from '../components/pages/Employees/reducer';

export default combineReducers({
  todo,
  todoUndoRedo,
  employees
});
