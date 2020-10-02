import React, { useEffect, useState } from 'react';
import Item from './Item';

const Posts = (props) => {
    const { publicaciones, title, nextPage} = props;
    if (publicaciones === undefined) return null;    
    
    let thereMore;
    let [edges, setEdges] = useState([]);
    const { end_cursor, has_next_page } = publicaciones.page_info || publicaciones;
    // const edges = publicaciones.edges;      
    const checkMorePosts = () => {        
        nextPage(end_cursor)
    }
    useEffect(() => {

        thereMore = { display: (has_next_page ? "block" : "none") };
        console.log(end_cursor)
        console.log(publicaciones.edges[0])    

        setEdges(publicaciones.edges)
    },[])    
    return (
        <article>
            <h4>{title}</h4>
            <ul className="grid-photos container">
                { (edges.map((p, idx) => {
                    return (<Item key={p.node.id} type={p.node.__typename} thumbnail_img={p.node.thumbnail_src}/>)
                }))}
            </ul>
            <div style={thereMore}>
                <button type="button" onClick={checkMorePosts}>Ver mas...</button>
            </div>
        </article>        
    )
}
export default React.memo(Posts);