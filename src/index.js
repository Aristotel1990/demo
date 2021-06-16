import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./reducers/reducer";
import { StateProvider } from "./reducers/StateProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import Home from "./pages/Home";
import RootPage from "./pages/RootPage";
import Feature from "./pages/Feature";
import About from "./pages/About";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Route component={Header} />
        <App>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={RootPage} />
          <Route exact path="/feature" component={Feature} />
          <Route exact path="/about" component={About} />
        </App>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
