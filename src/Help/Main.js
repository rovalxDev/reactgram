import React from 'react';
import InstagramPng from '../img/instagram_2.png';

const Main = () => {
    return (
        <div style={{ border: "1px solid" }} className="container-fluid">
                <p>Hazte una busqueda amigo!</p>
                <div className="row">
                    <img src={InstagramPng} alt="Insta" width="20%"/>
                    <span>Con import</span>
                </div>
                <div className="row">
                    {/* <img src={require("./img/instagram_2.png")} alt="Insta" /> */}                
                    <img src={window.location.origin + "/src/img/instagram_2.png"} alt="Insta" width="20%" />
                    <span>Con window.location.origin</span>
                </div>
                <div className="row">
                    <img src={process.env.PUBLIC_PATH+"img/react.svg"} alt="Insta" width="20%"/>
                    <span>Defined process.env.PUBLIC_PATH</span>
                </div>
                <div className="row">
                    <img src="https://miro.medium.com/max/4000/1*GeCepeAB48dIpf-UXh3kQg.jpeg" alt="Insta"  width="50%"/>
                    <span>From web</span>
                </div>
        </div>
    )
}
export default Main;