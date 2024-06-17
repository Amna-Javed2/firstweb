import React, {useState} from 'react'


export default function TextForm(props) {
const handelUpClick = ()=>{
  
  const newText=text.toUpperCase();
  
  setText(newText)
}
const handelLoClick = ()=>{
  
  const newText=text.toLowerCase();
  
  setText(newText)
}
const handleDownloadClick = () => {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'download.txt';
  a.click();
  setText(a)
}
const handleCopyClick =()=>{
  let text = document.getElementById('mybox')
  text.select()
  navigator.clipboard.writeText(text.value)
  
}
const handelPrintClick = ()=>{
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(text);
  printWindow.print();
  
  setText(printWindow)
}
const handelClearClick = ()=>{
  
  const newText='';
  
  setText(newText)
}
const handelExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}
const handleOnChange = (event)=>{
  console.log("On change");
setText(event.target.value)

}

  const [text,setText] = useState('Enter text here');
  return (
    <> 
    <div >
      <div className="container mb-3 " style={{color:props.mode==='dark'? 'yellow':'green'}}>
  <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:props.mode==='dark'? 'yellow':'green'}}>Email address</label>
  <input type="email" className="form-control"  onChange={handleOnChange} style={{color:props.mode==='dark'? 'yellow':'red',backgroundColor:props.mode==='dark'? '#042743':'white'}} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="container mb-50">
  <label for="mybox" className="form-label" style={{color:props.mode==='dark'? 'yellow':'red',backgroundColor:props.mode==='dark'? '#042743':'white'}}>{props.heading}</label>
  <textarea className="form-control" onChange={handleOnChange} style={{color:props.mode==='dark'? 'grey':'red',background:props.mode==='dark'? '#042743':'Yellow'}} id="mybox" value={text} rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2"style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handelUpClick}>ConvertToUpperCase</button>
<button className="btn btn-primary mx-2"  style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handelLoClick}>ConvertToLowerCase</button>
<button className="btn btn-primary mx-2" style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handelClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handleDownloadClick}>Download Text</button>
<button className="btn btn-primary mx-2" style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handleDownloadClick}>Download Text</button>
<button className="btn btn-primary mx-2" style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handelPrintClick}>Print Text</button>
<button className="btn btn-primary mx-2"  style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handleCopyClick}>Copy text</button>
<button className="btn btn-primary mx-2"  style={{color:props.mode==='dark'? 'red':'yellow',background:props.mode==='dark'? 'yellow':'red'}} onClick={handelExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'yellow':'green'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Esstemated required time to read the text </h2>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text:"Enter some text to preview"}</p>

    </div>
    </>   
  )
}
