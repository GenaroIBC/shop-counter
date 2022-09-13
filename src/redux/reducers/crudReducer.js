import { CREATE_ONE, DELETE_ONE, GET_ALL_DATA, UPDATE_ONE } from "../types";

const initialState = {
  users: [],
};

export function crudReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        users: payload,
      };

    case CREATE_ONE:
      return {
        ...state,
        users: [...state.users, payload],
      };

    case DELETE_ONE:
      return {
        ...state,
        users: state.users.filter(el => el.id !== payload),
      };

    case UPDATE_ONE:
      return {
        ...state,
        users: state.users.map(el => (el.id !== payload.id ? el : payload)),
      };

    default:
      return state;
  }
}
