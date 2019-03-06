import React, { Component } from 'react'
import { connect } from 'react-redux';
import {sync} from '../../actions/tests';

class ReduxThunkTest extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.reduxThunkText && this.props.reduxThunkText();
                }}>
                    Button
                </button>
                {this.props.async.map((item, index) => {
                    return (
                        <div key={index}>
                            Name : {item.name}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect((state) => {
    return {
        async: state.thunkTestReducer.async
    }
}, (dispatch) => {
    return {
        reduxThunkText: () => {
            dispatch(sync());
        }
    }
})(ReduxThunkTest);
