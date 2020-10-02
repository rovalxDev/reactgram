import React, { createRef } from 'react';
import {Link} from 'react-router-dom';
// import InstagramLogoText from '../img/instagram_text.svg';

const LayoutBasic = (props) => {   
    let imgShow = (props.showBack ? "block" : "none");
    return (
        <div className="rg-grid">
            <div className="rg-grid-item rg-areaheader">
                <Link to={"/"}><img style={{ display: imgShow}}  src={process.env.PUBLIC_PATH + "img/back.svg"} className="rg-svgback" alt="Rregresar"></img></Link>
                <img src={process.env.PUBLIC_PATH +"img/instagram_text.svg"} className="rg-svglogo img-fluid mx-auto d-block" />
            </div>
            { props.children }
        </div>
    )
}
export default LayoutBasic;