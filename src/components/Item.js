import React from 'react';
/**
 *  Item: regresa y maneja los types de instagram: GraphVideo, GraphImage, GraphSidecar
 * @param {*} props 
 */
const Item = (props) => {
    let { thumbnail_img,id} = props;
        
    return (
        <li className="grid-item" key={id}>
                <div>
                        <img src={thumbnail_img} width="100%"/>
                </div>
        </li>
    )
}

export default Item;