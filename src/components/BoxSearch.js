/**
 *  Box search for users / hashtags
 */
import React, { useState, useEffect } from 'react';

const BoxSearch = (props) =>{

    let setStringSearch = (stringSearch) => {
        if (stringSearch !== "") {
                props.fnSearchString(stringSearch)
        }
    }
    
    return (
        <div className="input-group rg-input-search">
            <input type="text" className="form-control" placeholder="Search @users / #hashtag..." aria-label="Recipient's username" aria-describedby="box-search" onKeyUp={(e) => setStringSearch(e.currentTarget.value)}/>
        </div>
    )
}

export default BoxSearch;