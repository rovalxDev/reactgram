import React from 'react';
import {Link} from 'react-router-dom';

const ErrorRoute = () => {
    return (
        <div  style={{ border: "1px solid" }}>
            <p>This page not found</p>
            <Link to="/">Inicio</Link>
        </div>
    )
}
export default ErrorRoute;