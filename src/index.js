import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import { connect } from 'react-redux';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';

import Main from './containers/Main';
import Sidebar from './containers/Sidebar';
import About from './containers/About';
import Layout from './layout/Main';

import {isMobile} from './helpers';
const mobile = isMobile();
class App extends Component{

    render(){
        let {loading = false} = this.props,
            className = 'app-wrapper';
        if(!loading) className += ' app-wrapper__loaded';
        if(mobile) className += ' app-wrapper__mobile';
        return(
            <div className={className}>
                <Preloader loading={loading} />
                <Cursor />
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Layout({sidebar: Sidebar, main: Main})} />
                        <Route exact path="/about" component={Layout({main:About})} />
                    </Switch>
                </ConnectedRouter>
            </div>
        )
    }
};

App = connect((state) => {
    return {
        loading: state.appReducer.loading
    }
})(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('app'));
registerServiceWorker();