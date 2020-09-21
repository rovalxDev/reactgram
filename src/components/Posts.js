import React from 'react';
import Item from './Item';

const Posts = (props) => {
    const { publicaciones, title} = props;
    if (publicaciones=== undefined) return null;    
    const edges = publicaciones.edges;
    console.log(edges)    

    return (
        <article>
            <h4>{title}</h4>
            <ul className="grid-photos container">
                { (edges.map((p, idx) => {
                    return (<Item key={p.node.id} type={p.node.__typename} thumbnail_img={p.node.thumbnail_src}/>)
                }))}
            </ul>
        </article>
    )
}
export default Posts;