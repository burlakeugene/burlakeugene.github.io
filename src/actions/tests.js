export const sync = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: 'ASYNC',
            payload: [
                {
                    name: 'two'
                }
            ]
        });
    }, 2000)
}