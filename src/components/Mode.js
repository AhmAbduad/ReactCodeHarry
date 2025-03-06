import React from "react";
import { useState } from 'react';

function Mode(props){

    const [modetext,setModetext] = useState('light');
    const changingmodetext = ()=>{
        modetext==='light'?setModetext('dark'):setModetext('light');
        if(modetext==='light'){
            document.body.style.backgroundColor='black';
            document.body.style.color="white";
        }
        else{
            document.body.style.backgroundColor='white';
            document.body.style.color="black";
        }
    }

    return(
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changingmodetext}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modetext}</label>
            </div>
        </>
    );
}

export default Mode;