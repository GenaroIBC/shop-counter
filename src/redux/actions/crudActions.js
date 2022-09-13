import { CREATE_ONE, DELETE_ONE, GET_ALL_DATA, UPDATE_ONE } from "../types";

export const getAllData = data => ({ type: GET_ALL_DATA, payload: data });
export const updateOne = dataToEdit => ({
  type: UPDATE_ONE,
  payload: dataToEdit,
});
export const createOne = newData => ({ type: CREATE_ONE, payload: newData });
export const deleteOne = id => ({ type: DELETE_ONE, payload: id });
