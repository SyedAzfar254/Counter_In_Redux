import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./actions/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {islogged ? <h3> The value is true </h3> : ""}
    </div>
  );
}

export default App;
