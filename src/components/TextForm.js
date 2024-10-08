import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert('All text cleared', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter your text here...')

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'? '#13466e' : 'white', color: props.mode==='dark'? 'white': '#042743'}}  id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button disabled={ text.length === 0} className = "btn btn-primary mx-1 my-1" onClick= {handleUpClick}>Convert to Uppercase</button>
            <button disabled={ text.length === 0} className = "btn btn-primary mx-1 my-1" onClick= {handleLoClick}>Convert to Lowercase</button>
            <button disabled={ text.length === 0} className = "btn btn-primary mx-1 my-1" onClick= {handleClearText}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'? 'white' : 'black'}}> 
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} minutes to read this sentence</p>
        </div>
        </>
    )
}