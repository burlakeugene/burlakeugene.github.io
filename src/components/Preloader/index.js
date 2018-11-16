import React from 'react';

const Preloader = (props) => {
    return(
        <div>
            {'loading '+props.visible}
        </div>
    )
}

export default Preloader;