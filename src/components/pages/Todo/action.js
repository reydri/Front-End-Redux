import { ADD_TODO, REMOVE_TODO } from '../../../constants/types';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    item: {
      id: Math.random()
        .toString(36)
        .substring(2),
      text
    }
  };
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo
  };
}
