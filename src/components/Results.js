/**
 *  Results of search about users and hashtags
 */
import React, { useEffect, useState } from 'react';

let Results = (props) => {

        return (     
            <div className={"rg-results" + (props.sSearch.length >= 3  ?  " rg-show-boxresults" : "")} >
                    <ul>
                        {props.aResults.map((r, idx) => {
                            return (r.username) ? <li key={idx} >{"@"+r.username}</li> : <li key={idx} >{"#"+r.name}</li>
                        }) }
                    </ul>                    
            </div>
        )
}
export default Results;