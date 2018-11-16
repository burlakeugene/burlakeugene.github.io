import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Route} from 'react-router';
import {ConnectedRouter, push} from 'react-router-redux';
import { connect } from 'react-redux';
import Preloader from './components/Preloader';
import Main from './containers/Main';
import About from './containers/About';
import {loadSwitch} from './actions/app';

class App extends Component{
    constructor(props){
        super(props);       
    }

    componentWillMount(){
        setTimeout(() => {
            store.dispatch(loadSwitch(true));
        }, 3000);
    }

    render(){
        let {loading = false} = this.props;
        return(        
            <ConnectedRouter history={history}>                
                <div>
                    <Preloader visible={loading} />    
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                </div>
            </ConnectedRouter>            
        )       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      loading: state.appReducer.loading
    }
};

App = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));
registerServiceWorker();