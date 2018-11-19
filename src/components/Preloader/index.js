import React, {Component} from 'react';
import {loadSwitch} from '../../actions/app';
import {store} from '../../store/';
import './sass/styles.scss';

class Preloader extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: this.props.loading,
            hidden: true,
            full: false
        }
    }
    componentWillReceiveProps(props){
        let visibleState = this.state.loading,
            visibleProps = props.loading;
        if(visibleProps !== visibleState){
            if(visibleProps){
                this.setState({
                    full: !visibleProps,
                    loading: visibleProps
                });
            }
            else{
                
                this.setState({
                    full: !visibleProps
                },() => {
                    setTimeout(() => {
                        this.setState({
                            loading: visibleProps
                        })
                    }, 300);
                });
            }
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                hidden: false
            })
        }, 500);
        let bool = true;
        setTimeout(() => {
            store.dispatch(loadSwitch(!bool));
        }, 2500)
        
    }
    render(){
        let {loading, hidden, full} = this.state,
            className = 'preloader';
        if(hidden) className += ' preloader__hidden';
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