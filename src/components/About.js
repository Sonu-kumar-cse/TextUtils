import React from 'react'

export default function About(props) {
    
    
    
    return (
        <div className='container' style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
            <h2 className='my-4'>About us</h2>
            <div className="accordion"  style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        TextUtils: Breif
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                        TextUtils is an app in which you can modify your text and copy it. In this app you can convert your text lowercase to uppercade and vice-versa. In future more features will be added.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        TextUtils: Developer
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                        Hi!. My name is Sonu. I'm a CSE student. I created this app using react js and other web languages.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        TextUtils: Compatibility
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#403d6d',color:props.mode==='light'?'black':'white'}}>
                        This web app is compatiable with almost every browsers like chrome, firefox, safari, internet explorer etc.

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
