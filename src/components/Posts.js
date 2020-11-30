import React, { useEffect, useState } from 'react';
import Item from './Item';

const Posts = (props) => {
    // console.log(props.publicaciones);
    let [statePublicaciones, setStatePublicaciones] = useState([]);
    const { publicaciones, count, page_info, title, nextPage} = props;
    if (publicaciones === undefined) return null;    
    
    let thereMore;
    // let aEdges = [];
    // let [edges, setEdges] = useState([]);
    // const { end_cursor, has_next_page } = publicaciones.page_info || publicaciones;
       
    const checkMorePosts = () => {        
        nextPage(page_info.end_cursor)
    }
    useEffect(() => {
        setStatePublicaciones(publicaciones)        
        thereMore = { display: (page_info.has_next_page ? "block" : "none") };
        //aEdges = [...edges, publicaciones.edges];
        // setEdges(aEdges[0]);
    }, [publicaciones])    
    // console.log(edges);
    return (
        <article>
            <h4>{title}</h4>
            <ul className="grid-photos container">
                {(statePublicaciones.map((p, idx) => {        
                    if(p.node.id !== undefined){            
                        return (<Item key={p.node.id} id={p.node.id}  type={p.node.__typename} thumbnail_img={p.node.thumbnail_src}/>)
                    } else return null;
                }))}
            </ul>
            <div style={thereMore}>
                <button type="button" onClick={checkMorePosts}>Ver mas...</button>
            </div>
        </article>        
    )
}
export default React.memo(Posts);