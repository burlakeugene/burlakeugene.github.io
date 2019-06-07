import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Layout from "layouts/Main";

import Preloader from "components/Preloader";
import Cursor from "components/Cursor";

import Main from "containers/Main";
import Sidebar from "containers/Sidebar";

import { Detection } from "burlak";
import {loadSwitch} from 'actions/App';
const Detect = new Detection();
class App extends Component {
  componentDidMount(){
    setTimeout(() => {
      store.dispatch(loadSwitch(false));
    }, 3000);
  }
  render() {
    let { loadingShow = false, loadingMini = false } = this.props,
      mobile = Detect.isMobile(),
      className = "app-wrapper";
    if (!loadingShow) className += " app-wrapper__loaded";
    return (
      <div className={className}>
        <Preloader mini={loadingMini} loading={loadingShow} />
        {!mobile && <Cursor />}
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={Layout({ sidebar: Sidebar, main: Main })}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

App = connect(state => {
  return {
    loadingShow: state.appReducer.loading.show || false,
    loadingMini: state.appReducer.loading.mini || false
  };
})(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
serviceWorker.unregister();
