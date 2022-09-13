import {
  DECREMENT_FIVE,
  DECREMENT_ONE,
  INCREMENT_FIVE,
  INCREMENT_ONE,
  RESET,
} from "../types";

export const sumOne = () => ({ type: INCREMENT_ONE });
export const sumFive = () => ({ type: INCREMENT_FIVE });
export const restOne = () => ({ type: DECREMENT_ONE });
export const restFive = () => ({ type: DECREMENT_FIVE });
export const reset = () => ({ type: RESET });
