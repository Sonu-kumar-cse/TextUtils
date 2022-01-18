import React, {useState} from 'react'

export default function TextArea(props) {
    
    const handleUpClick= ()=>{

        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
        
    }

    const handleLowClick= ()=>{
        setText(text.toLocaleLowerCase());
        props.showAlert("Converted to LowerCase","success")

    
    }
    const handleClearText= ()=>{
        setText("");
    
    }
    const handleCopyText= ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to ClipBoard","success")

    
    }
    const handleOnChange= (event)=>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                <h3>Enter your text here</h3>
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="container">
                <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button  disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                <button  disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                
            </div>

            <div className="container my-4" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                <h4>Text description</h4>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length + " words and "+ text.length +" characters"}</p>
            </div>
            <div className="container"style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                <h4>Preview</h4>
                <p>{text.length>0?text:'Enter something in the above textbox to preveiw it!'}</p>
            </div>
        </>
    )
}
