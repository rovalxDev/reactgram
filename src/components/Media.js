import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import  LayoutBasic from '../Layout/Basic'; // Layout basico 
import { Link } from 'react-router-dom';
import Axios from 'axios';
//import componentes
import ProfileData from './ProfileData';
import Posts from './Posts';

const Media = () => {
    let match = useRouteMatch(); // get params of the route
    let [stateData, setStateData] = useState({})
    let [isLoading, setLoading] = useState(true) // loading message 
    let {params,path, url} = match;
    let isUser = path.indexOf("hashtag") > -1? false : true;    
    let URL_BASE = "https://www.instagram.com/";

    useEffect(() => {        
        let requestData = getObjectInstagram().then((response) => {            
            setLoading(false);
            if(isUser){
                setStateData(response.graphql.user);
            } else {
                setStateData(response.graphql.hashtag);
            }
            // setStateData(response.graphql.user)
        });        

    }, [])
    /**
     * Get data object instagram with data from users or hashtags
     */
    let getObjectInstagram = async () => {        
        let url_request = URL_BASE + (isUser ? params.name : "tags/" + params.name) + "?__a=1";
        try {
            let response = await Axios.get(url_request);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    return(
        <LayoutBasic>
                <Link to={"/"}>Back</Link>    
                {isLoading ?             
                    <div>Loading...</div>
                :
                    <>
                        <ProfileData profile={stateData} isuser={isUser}/>
                        { !isUser? <Posts title="Destacados" publicaciones={stateData.edge_hashtag_to_top_posts}/> : null}
                        <Posts title="Mas recientes" publicaciones={(isUser ? stateData.edge_owner_to_timeline_media : stateData.edge_hashtag_to_media)} />
                    </>
                }            
        </LayoutBasic>
    )
}

export default Media;