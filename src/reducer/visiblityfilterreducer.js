
import { VISIBILITY_FILTER } from "../constants"

const initialState = VISIBILITY_FILTER.ALL;

export const visibilityFilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case
      'SETFILTER': {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}
