import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./components/Counter";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
      <Counter />
    </Provider>
  );
}

export default App;
