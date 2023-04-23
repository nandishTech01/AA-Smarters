import React from 'react'
import PropTypes from 'prop-types' //impt
import { useState } from 'react';



export default function TextForm(props) {

    const handleUPclick = ()=>{
     //   console.log("upper case was clicked."+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoclick = ()=>{
       // console.log("lower case was clicked."+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleonchange = (event)=>{
        setText(event.target.value)
    }


    const [text , setText] = useState('');
 //   text="this is text"; // Wrong way to text
 //    setText("next text") //correct way to change the text

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} id="myBox" rows="8" onChange={handleonchange}></textarea>
        </div>
       <button className='btn btn-primary mx-2' onClick={handleUPclick}>Convert To uppertext</button>
       <button className='btn btn-primary mx-2' onClick={handleLoclick}>Convert To Lowertext</button>

    </div>

    <div className='container my-3'>
        <h2>Your text Summery</h2>
        <p>{text.split(" ").length} words  and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes to read </p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
}
