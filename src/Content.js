import React from 'react'
import { useParams } from 'react-router';

let Content = (props) => {
    let params = useParams();    
    console.log(params)
    let {username} = params;
    let {type} = props;
    return (
        <div style={{ border: "1px solid" }}>
            <p>{type === "perfil" ? "Es un perfil: "+username : "Es un hashtag: "+ hashtag}</p>
        </div>
    )
}
export default Content;