import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { isMobile } from 'actions/App';

import Index from 'containers/Index';
import Header from 'containers/Header';
import Footer from 'containers/Footer';
import NotFound from 'containers/NotFound';

import Cursor from 'components/Cursor';
import ScrollBar from 'components/ScrollBar';

import { loadOff, loadOn } from 'actions/Loading';

import 'assets/sass/main.scss';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      loadOff();
    }, 3000);
  }
  render() {
    let {
      contentHidden = false,
      appLoading = false,
      headerWide = false
    } = this.props;
    return (
      <div
        className={[
          'app',
          !appLoading && !headerWide ? 'app__loaded' : 'app__loading'
        ].join(' ')}
      >
        {!isMobile() && <Cursor />}
        {!isMobile() && <ScrollBar scrollEnabled={!contentHidden} />}
        <Router>
          <Header />
          <div
            className={[
              'app-body',
              !contentHidden ? 'app-body__visible' : 'app-body__hidden'
            ].join(' ')}
          >
            <Switch>
              <Route exact path="/" component={Index} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

App = connect(state => {
  return {
    appLoading: state.appReducer.loading.appLoading,
    headerWide: state.appReducer.loading.headerWide,
    contentHidden: state.appReducer.loading.contentHidden
  };
})(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
serviceWorker.unregister();
