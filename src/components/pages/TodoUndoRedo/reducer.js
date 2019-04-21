import { ADD_TODO_UR, REMOVE_TODO_UR, UNDO_TODO_UR, REDO_TODO_UR } from '../../../constants/types';

const initialState = {
  pastItems: [],
  items: [],
  futureItems: []
};

export default function reducer(state = initialState, action) {
  const { type, item, todo } = action;
  const { pastItems, items, futureItems } = state;
  const previous = pastItems[pastItems.length - 1];
  const newPast = pastItems.slice(0, pastItems.length - 1);
  const next = futureItems[0];
  const newFuture = futureItems.slice(1);

  switch (type) {
    case ADD_TODO_UR:
      return {
        ...state,
        pastItems: [...pastItems, items],
        items: items.concat(item),
        futureItems: []
      };
    case REMOVE_TODO_UR:
      return {
        ...state,
        pastItems: [...pastItems, items],
        items: items.filter(i => i.id !== todo.id),
        futureItems: []
      };
    case UNDO_TODO_UR:
      return {
        ...state,
        pastItems: newPast,
        items: previous,
        futureItems: [items, ...futureItems]
      };
    case REDO_TODO_UR:
      return {
        ...state,
        pastItems: [...pastItems, items],
        items: next,
        futureItems: newFuture
      };

    default:
      return state;
  }
}
