import React, {Component} from 'react';
import {loadSwitch} from '../../actions/app';
import {store} from '../../store/';
import './sass/styles.scss';

class Preloader extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: this.props.loading,
            first: true,
            full: false
        }
    }
    componentWillReceiveProps(props){
        let visibleState = this.state.loading,
            visibleProps = props.loading;
        if(visibleProps !== visibleState){
            if(visibleProps){
                this.setState({
                    loading: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            full: false,
                        })
                    }, 300)                    
                });
            }
            else{                
                this.setState({
                    full: true
                },() => {
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        })
                    }, 300);
                });
            }
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                first: false
            }, () => {
                setTimeout(() => {
                    store.dispatch(loadSwitch(false));
                }, 2500);
            })
        }, 500);
        setTimeout(() => {
            store.dispatch(loadSwitch(true));
        }, 6000)
        setTimeout(() => {
            store.dispatch(loadSwitch(false));
        }, 8500)
        
    }
    render(){
        let {loading, hidden, full, first} = this.state,
            className = 'preloader';
        if(first) className += ' preloader__first';
        if(loading) className += ' preloader__loading';
        if(full) className += ' preloader__full';
        return(
            <div className={className}>
                <div className="preloader-inner"></div>
            </div>
        )
    }
}

export default Preloader;