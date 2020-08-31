import React from 'react';
import { useParams, useRouteMatch } from 'react-router';
const Media = () => {
    let params = useParams();
    let match = useRouteMatch();
    console.log(params);
    console.log(match);
    return(
        <h3>Media</h3>
    )
}

export default Media;