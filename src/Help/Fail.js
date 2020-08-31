import React from 'react';
import {Redirect} from 'react-router-dom';

const Fail = () => {
    console.log("En el componente fail")
    return(
        <Redirect to="/" />
    )
}

export default Fail;