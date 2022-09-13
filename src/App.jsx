import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./components/Counter";
import { Crud } from "./components/crud/Crud";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
      <Counter />
      <Crud />
    </Provider>
  );
}

export default App;
