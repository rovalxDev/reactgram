import React from 'react';
// import InstagramLogoText from '../img/instagram_text.svg';

const LayoutBasic = ({ children }) => {    
    return (
        <div className="rg-grid">
            <div className="rg-grid-item rg-areaheader">
                <img src={process.env.PUBLIC_PATH +"/img/instagram_text.svg"} className="rg-svglogo img-fluid mx-auto d-block" />
            </div>
            { children }                    
        </div>
    )
}
export default LayoutBasic;