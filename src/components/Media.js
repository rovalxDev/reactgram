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
    let [stateData, setStateData] = useState([]) // los edges array    
    let  [stateprofile, setStateProfile] = useState({}) // datos del perfil del usuario / hashtag;
    let [pageInfoEdges, setStatePageInfoEdges] = useState({}) // Informacion de siguiente pagina, end_cursor dentro de response edges
    let countEdges = 0; // total de edges o elementos que obtuvo la peticion    
    let [stateNextpage, setStateNextpage] = useState() // end_cursor para la siguiente pagina si el valor es diferente de vacio
    let [isLoading, setLoading] = useState(true) // loading message 
    let {params,path, url} = match;
    let isUser = path.indexOf("hashtag") > -1? false : true;    
    let URL_BASE = "https://www.instagram.com/";

    useEffect(() => {        
        let requestData = getObjectInstagram().then((response) => {                                    
            console.log(response);
            // NOTA: El arreglo deberia ser un [] en lugar de un {} objeto para poder hacer una copia y insertarle los nuevos registros de la peticion de la paginas siguientes. 
            // get array edges 
            let aBackupStateData =  [];
            if(isUser){
                aBackupStateData = stateData; // respaldo de estado edges                
                setStateProfile(response.graphql.user);                
                let aEdgesTmp = response.graphql.user.edge_owner_to_timeline_media.edges;
                
                countEdges = response.graphql.user.edge_owner_to_timeline_media.count;
                setStatePageInfoEdges(response.graphql.user.edge_owner_to_timeline_media.page_info);
                // console.log(aBackupStateData);
                console.log(aEdgesTmp[0].node.id)
                // setStateData([...aEdgesTmp, ...aBackupStateData]);
                setStateData(aEdgesTmp);
            } else {
                setStateData(response.graphql.hashtag);
            }                        
            setLoading(false);
        });        

    }, [stateNextpage])
    const nextPage = (end_cursor) => {                
        setStateNextpage(end_cursor);
    }
    /**
     * Get data object instagram with data from users or hashtags
     */
    let getObjectInstagram = async () => {        
        let url_request = URL_BASE + (isUser ? params.name : "tags/" + params.name) + "?__a=1" +(stateNextpage !== undefined ? "&max_id="+stateNextpage : "");
        console.log(url_request);
        try {
            let response = await Axios.get(url_request);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    return(
        <LayoutBasic showBack={!isLoading}>
                {isLoading ?             
                    <div>Loading...</div>
                :
                    <>
                    <ProfileData profile={stateprofile} isuser={isUser}/>
                        {/* { !isUser? <Posts title="Destacados" publicaciones={stateData.edge_hashtag_to_top_posts}/> : null} */}
                    <Posts title="Mas recientes" publicaciones={stateData} count={countEdges} page_info={pageInfoEdges} nextPage={nextPage}/>
                    </>
                }            
        </LayoutBasic>
    )
}

export default Media;
// export default React.memo(Media);