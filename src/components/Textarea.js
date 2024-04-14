import React, { useState } from 'react'

export default function Textarea(props) {
const [text , setText]=useState("Enter your text here");
const [emails, setEmails] = useState([]);
const [phoneNumber,setPhoneNumber]= useState([]);
const handlechange=(event)=>{
    setText(event.target.value);
}
const handleupcase=()=>{
    const newtext=text.toUpperCase();
    setText(newtext);
    props.sowAlert('Converted to upper case','success');
}
const handlelocase=()=>{
    const newtext=text.toLowerCase();
    setText(newtext);
    props.sowAlert('Converted to lower case','success');
}
const handlePhoneNumber=()=>{
    const regex=/(?:\+\d{1,2}\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/g;
    const numbers=text.match(regex);
    setPhoneNumber(numbers || [])
    props.sowAlert('Phone number is extracted','success');
}
const handleclear=()=>{
    setText('Enter your text here');
}
const handleextraspace=()=>{
    const newtext=text.replace(/\s\s+/g, ' ');
    setText(newtext);
}
const handleEmail=()=>{
    const emailRegex = /[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,}/g;

    const emails = text.match(emailRegex);
    setEmails(emails || [])
}
  return (
    
    <div>
    <div className="mb-3">
    <h2 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h2>
        <textarea className="form-control" value={text} id="myBox" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} onChange={handlechange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-3' onClick={handleupcase}>Upper case</button>
    <button className='btn btn-primary mx-3 my-1' onClick={handlelocase}>Lower case</button>
    <button className='btn btn-primary mx-3 my-1' onClick={handlePhoneNumber}>Extract PhoneNumber</button>

    <button className='btn btn-primary mx-3 my-1' onClick={handleclear}>Claer</button>
    <button className='btn btn-primary mx-3 my-1' onClick={handleEmail}>Extract Email</button>

    <button className='btn btn-primary mx-3 my-1'onClick={handleextraspace}>Remove extra space</button>
    <div className='my-3' style={{color: props.mode==='light'?'black':'white',display:'flex',flexDirection:'column'}}>
        <span className='mx-3'>{text.length} characters</span>
        <span className='mx-3'> {text.length===0?0:text.split(' ').length} words</span>
        <span className='mx-3'>{text.length===0?0:0.008*text.split(' ').length} minutes time</span>
        <span className='mx-3'>Extracted email :{emails.map((email, index) => <span key={index}>{email} </span>)}</span>
        <span className='mx-3'>Extracted Phone Number :{phoneNumber.map((number, index) => <span key={index}>{number} </span>)}</span>
        <h4 className='my-3'>Preview</h4>
        <p>{text}</p>
    </div>
    </div>
  )
}
