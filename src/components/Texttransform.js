import  Alert  from "../components/Alert.js";
import React, { useState } from "react";


function Texttransform(){
    const [text,setText] = useState("");
    const characterCount = text.length;

    // Count words (split by spaces and remove empty strings)
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    
    const handleChange =(event) => {
        setText(event.target.value);
    }

    const capatilize = () =>{
        setText(text.toUpperCase());
        showalert('The text has been capatlized');
    }

    const LowerCase = ()=>{
        setText(text.toLowerCase());
        showalert('The text has been lower cased');
    }

    const Clear = () =>{
        setText("");
        showalert('The text has been cleared');
    }

    const wordsPerMinute = 200;

    // Calculate estimated reading time (rounded to 2 decimal places)
    const readingTime = (wordCount / wordsPerMinute).toFixed(2);


    // alert code by ahmad
    const [alert,setalert] = useState(null);

    const  showalert = (message)=>{
        setalert(message);

        setInterval(() => {
            setalert(null);
        }, 2000);
    }


    return(
        <>
            <Alert modetext={alert}/>
            <div className="container">
                <div data-mdb-input-init className="form-outline">
                    <textarea className="form-control" id="textAreaExample1" rows="4" placeholder="Type Something here" onChange={handleChange} value={text}></textarea>
                    <button className="btn btn-primary" onClick={capatilize}>Capatilize</button>
                    <button className="btn btn-primary mx-2" onClick={LowerCase}>Lower Case</button>
                    <button className="btn btn-primary" onClick={Clear}>Clear Text</button>
                </div>
            </div>

            <div className="container">
                <p>{wordCount} words and  {characterCount} characters</p>
                <p>Estimated Reading Time: {readingTime} min</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Texttransform;