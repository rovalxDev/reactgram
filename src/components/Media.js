import React, { useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import  LayoutBasic from '../Layout/Basic'; // Layout basico 
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Media = () => {
    let match = useRouteMatch(); // get params of the route
    let {params,path, url} = match;
    let isUser = path.indexOf("hashtag") > -1? false : true;
    let URL_BASE = "https://www.instagram.com/";    
    console.log(params);

    useEffect(() => {
        console.log("Peticion...")
        let requestData = getObjectInstagram().then((response) => {
            console.log(response.graphql.user);
        });        

        
    },[])
    /**
     * Get data object instagram with data from users or hashtags
     */
    let getObjectInstagram = () => {
        let url_request = URL_BASE + (isUser ? params.username : "tags/" + params.name) + "/?__a=1";
        return Axios.get(url_request).then((response) => {
            return response.data;
        }).catch((error) => {                
                return error;
        })
    }
    return(
        <LayoutBasic>
            <div className="rg-grid-item">
                <h3>Media</h3>
                <Link to={"/"}>Back</Link>
                <ul>
                        <li>{params.name || params.username}</li>
                        <br />
                        <li>{path}</li>
                        <li>{url}</li>
                </ul>
            </div>
        </LayoutBasic>
    )
}

export default Media;