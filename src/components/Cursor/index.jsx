import React, { Component } from 'react'
import './styles/styles.scss';

class Cursor extends Component {
    constructor(){
        super();
        this.state = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        this.move = this.move.bind(this);
    }
    componentDidMount(){
        this.addCursor();
    }
    componentWillUnmount(){
        this.removeCursor();
    }
    addCursor(){
        document.body.classList.add('custom-cursor');
        document.addEventListener('mousemove', this.move);
    }
    removeCursor(){
        document.body.classList.remove('custom-cursor');
        document.removeEventListener('mousemove', this.move);
    }
    move(e){
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render() {
        let {x, y} = this.state,
            styles = {
                left: x+'px',
                top: y+'px'
            };
        return (
            <div className="cursors">
                <div className="cursor cursor__mini" style={styles}></div>
                <div className="cursor" style={styles}></div>
            </div>
        )
    }
}

export default Cursor;