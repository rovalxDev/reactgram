import React from 'react'
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

let Content = (props) => {
    let {params,url} = props.match; 

    let {username, posts} = params;
    let tParams = Object.keys(params).length;
    
        return (
            <div style={{ border: "1px solid" }}>
                <h5>{ "llamado: "+url}</h5>
                <p>{ "usuario: "+username}</p>
                <p>{ "posts: "+(posts? posts : "-")}</p>
                <Link to="/redirect" >Redirect desde Fail</Link>
            </div>
        )
}
export default Content;