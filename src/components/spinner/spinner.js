import React from 'react';
import './spinner.css'

export let Spinner = () => {
    return(
        <div className="lds-css ng-scope">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>   
    )    
}