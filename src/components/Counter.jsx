import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restFive,
  restOne,
  sumFive,
  sumOne,
} from "../redux/actions/counterActions";

export function Counter() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(sumOne())}>+1</button>
      <button onClick={() => dispatch(sumFive())}>+5</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(restFive())}>-5</button>
      <button onClick={() => dispatch(restOne())}>-1</button>
      <h3>{state.counterReducer}</h3>
    </>
  );
}
