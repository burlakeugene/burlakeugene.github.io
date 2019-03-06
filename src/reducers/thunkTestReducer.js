var thunkTestReducer = function(state = {
    async: []
}, action) {
    let newState = Object.assign({}, state);
    if (action.type === 'ASYNC') {
        newState.async = action.payload;
        return newState;
    }
    return state;
}

export default thunkTestReducer;