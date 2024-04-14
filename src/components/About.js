import React from 'react'

export default function About(props) {
    
  return (
    <div className='container my-5' style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
    <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        TextUtils 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
      TextUtils is a versatile web tool for text manipulation, offering functions like converting text to uppercase or lowercase, clearing input fields, and extracting email and phone numbers from text. With its user-friendly interface, TextUtils simplifies text processing tasks, making it a valuable tool for students, professionals, and casual users alike.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
      TextUtils is a free-to-use web tool designed for effortless text manipulation tasks such as converting text to uppercase or lowercase, clearing input fields, and extracting email and phone numbers. Its intuitive interface and comprehensive features make it a convenient choice for various text-related needs.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button className='btn btn-primary my-2' onClick={handleDarkMode}>Dark mode</button> */}
    </div>
  )
}
