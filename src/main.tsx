import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
// redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
