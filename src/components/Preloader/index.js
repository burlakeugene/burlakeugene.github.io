import React, {Component} from 'react';
import {loadSwitch} from '../../actions/app';
import {store, history} from '../../store/';

class Preloader extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: this.props.visible,
            firstRender: false
        }
    }
    componentWillReceiveProps(props){
        let visibleState = this.state.visible,
            visibleProps = props.visible;
        if(visibleProps !== visibleState){
            this.setState({
                visible: visibleProps
            })
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                firstRender: true
            })
        }, 1000)
        setTimeout(() => {
            store.dispatch(loadSwitch(true));
        }, 3000);        
    }
    render(){
        let {visible, firstRender} = this.state;
        return(
            <div>
                {'loading '+visible+' '+firstRender}
            </div>
        )
    }
}

export default Preloader;