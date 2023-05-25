import React from 'react'
import PropTypes from 'prop-types' //impt
import { useState } from 'react';



export default function TextForm(props) {

    const handleUPclick = ()=>{
     //   console.log("upper case was clicked."+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted into the uppercase","success");
    }

    const handleLoclick = ()=>{
       // console.log("lower case was clicked."+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted into the lowercase","success");
    }

    const handleclickclear = ()=>{
         setText('')
         props.showAlert("clear all text successfully","success");
     }

     const handleCopyAll = ()=>{
            var text = document.getElementById("myBox") //id thi text layine text variable ma nakhse
            text.select();  //then badha text select thay jase aa method thi
            navigator.clipboard.writeText(text.value) //ana thi badhi value copy thay jase.
            props.showAlert("copied to clipboard.","success");
     }

     const removeextraspaces = ()=>{
        var newText1 = text.split(/[ ]+/);  //this is firstly create the arraay and we have to split the text with the extra spaces. 
        setText(newText1.join(" ")) //after remove the extra spaces then you have to join the text and set the text.
        props.showAlert("Removed Extra Spaces..","success");
    }
    
    const handleonchange = (event)=>{
        setText(event.target.value)
    }

    


    const [text , setText] = useState('');
 //   text="this is text"; // Wrong way to text
 //    setText("next text") //correct way to change the text

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'? '#042743' : 'white',
         color: props.mode==='dark'? 'white' : '#042743',border: 'solid'}} onChange={handleonchange}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUPclick}>Convert To uppertext</button>
       <button className='btn btn-secondary mx-1 my-1' onClick={handleLoclick}>Convert To Lowertext</button>
       <button className='btn btn-success mx-1 my-1' onClick={handleclickclear}>Clear</button>
        <button className='btn btn-info mx-1 my-1' onClick={handleCopyAll}>Copy</button>
        <button className='btn btn-primary mx-1 my-1' onClick={removeextraspaces}>delete extra spaces</button>





    </div>

    <div className='container my-3' style={{color : props.mode==='dark'? 'white' : '#042743'}}>
        <h2>Your text Summery</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words  and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read </p>
    
    <h2>Preview </h2>
    <p>{text.length>0?text:"please enter some text to preview.."}</p>
    </div>
    </>
  )
}
