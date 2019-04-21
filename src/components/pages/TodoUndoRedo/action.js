import { ADD_TODO_UR, REMOVE_TODO_UR, UNDO_TODO_UR, REDO_TODO_UR } from '../../../constants/types';

export function addTodo(text) {
  return {
    type: ADD_TODO_UR,
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
    type: REMOVE_TODO_UR,
    todo
  };
}

export function undo() {
  return {
    type: UNDO_TODO_UR,
  };
}

export function redo() {
  return {
    type: REDO_TODO_UR,
  };
}
