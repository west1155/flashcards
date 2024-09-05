import { Router } from './app/router';
import {Provider} from "react-redux";
import {store} from "./app/store/store";

export function App() {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
}
