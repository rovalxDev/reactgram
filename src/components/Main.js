import React, { useState, useEffect } from 'react';
import InstagramLogoText from '../img/instagram_text.svg';
import Results from './Results';
import BoxSearch from './BoxSearch';
import Axios from 'axios';

const Main = () => {
    let [stateSearch, setStateSearch] = useState("");    
    let [results, setResults] = useState([]);    
    let aResults = [];

    let setSearchString = (s) => {
        if (s === "") { // si llega vacio el prop sSearch el componente no se ejecuta
            return null;
        }
        setStateSearch(s)
    }   

    useEffect(() => {
        if (stateSearch.length >= 3) {

            let promiseRequest = getSearch();
            promiseRequest.then((datos) => {
                let aHashtags = datos.hashtags.map(function (h) {
                    return h.hashtag;
                });
                let aUsers = datos.users.filter(function (u, index) {
                    if (index <= 15) {
                        return u.user;
                    }
                }).map((u) => { return u.user });

                aResults = aHashtags.concat(aUsers); // name are hashtags / username are users
                setResults(aResults)                
            })
        } else {            
            setResults([])  
        }
    }, [stateSearch])

    let getSearch = async () => {
        let url = "https://www.instagram.com/web/search/topsearch/?context=blended&query=" + stateSearch;
        return await Axios.get(url).then((response) => {
            return response.data;
        })
    }    

    return (
        <div className="rg-grid">
                <div className="rg-grid-item rg-areaheader">
                    <img src={InstagramLogoText} className="rg-svglogo img-fluid mx-auto d-block" />
                        </div>
                <div className="rg-grid-item rg-areasearch" >
                    <BoxSearch fnSearchString={setSearchString} />
                        </div>
                <div className="rg-grid-item rg-arearesults" >      
                <Results sSearch={stateSearch} aResults={results} />
                </div>
        </div>
    )
}

export default Main;