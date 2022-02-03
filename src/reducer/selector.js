
import { VISIBILITY_FILTER } from "../constants";

export const getTodosByVisibilityFilter = (store, visibilityFiler) => {
  switch(visibilityFiler) {
    case VISIBILITY_FILTER.COMPLETED:
      return store.list.filter(list => list.completed);
    case VISIBILITY_FILTER.INCOMPLETED:
      return store.list.filter(list => !list.completed);
    default:
      return store.list;
  }
}