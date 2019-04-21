import { ADD_TODO, REMOVE_TODO } from '../../../constants/types';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  const { type, item, todo } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        items: state.items.concat(item)
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(i => i.id !== todo.id)
      };
    default:
      return state;
  }
}
