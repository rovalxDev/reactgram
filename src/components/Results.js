/**
 *  Results of search about users and hashtags
 */
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

let Results = (props) => {      
        return (     
            <div className={"rg-results" + (props.sSearch.length >= 3  ?  " rg-show-boxresults" : "")} >
                    <ul>
                        {props.aResults.map((r, idx) => {
                            return (
                                    <li key={"ig_res_"+idx} className="grid-results">
                                        <div className="grid-results-item center">
                                                <img src={r.profile_pic_url} />
                                        </div>
                                        <div className="grid-results-item">
                                                <div className="">
                                                        <Link to={(r.username) ? "/profile/" + r.username : "/hashtag/"+r.name}>
                                                              { (r.username) ? "@"+ r.username : "#" + r.name}
                                                        </Link>
                                                </div>
                                        <div className="">{(r.username) ? "@" + r.full_name : "#" + r.search_result_subtitle}</div>                                                
                                        </div>
                                    </li>
                            )                             
                        }) }
                    </ul>                    
            </div>
        )
}
export default Results;