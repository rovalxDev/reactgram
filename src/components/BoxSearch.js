/**
 *  Box search for users / hashtags
 */
import React, { useState, useEffect } from 'react';

const BoxSearch = (props,prevProps) =>{
    const refBoxSearch = React.createRef();

    let setStringSearch = (stringSearch) => {
        // if (stringSearch !== "") {            
                props.fnSearchString(stringSearch)
        // } 
    }

    useEffect(() => {
        refBoxSearch.current.focus();
    })
    
    return (
        <div className="input-group rg-input-search">
            <input type="text" className="form-control" placeholder="Search @users / #hashtag..." aria-label="Recipient's username" aria-describedby="box-search" onKeyUp={(e) => setStringSearch(e.currentTarget.value)} ref={refBoxSearch}/>
        </div>
    )
}

export default BoxSearch;