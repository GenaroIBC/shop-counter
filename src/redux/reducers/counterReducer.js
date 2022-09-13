import {
  DECREMENT_FIVE,
  DECREMENT_ONE,
  INCREMENT_FIVE,
  INCREMENT_ONE,
  RESET,
} from "../types";

const initialState = 0;

export function counterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_ONE:
      return state + 1;
    case INCREMENT_FIVE:
      return state + 5;
    case DECREMENT_ONE:
      return state - 1;
    case DECREMENT_FIVE:
      return state - 5;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
