import React from 'react'
//import emailjs from 'emailjs-com'


const ContactSection = () => {
    const sendEmail = ()=> {
    
    }
    
    return (
        <div className="Contact" style={{padding: '75px 0', background: 'linear-gradient(0deg, black, #404040)'  }}>
            <div style={{display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={sendEmail} style={{paddingRight: "20px"}}>
                    <div className="col-8 pt-3 mx-auto" >

                        <input type="text" className="form-control" id="name" placeholder="Your Name"  style={{fontSize: '1.2rem', fontFamily: 'lucida grande'}}/>

                    </div>
                    <div className="form-group">

                        <input type="email" className="form-control" id="email" placeholder="Your Email Address"  style={{fontSize: '1.2rem', fontFamily: 'lucida grande'}}/>

                    </div>

                    <div className="form-group">
                        <textarea className="form-control" id="" placeholder="Your message here..." style={{fontSize: '1.2rem', fontFamily: 'lucida grande'}} />
                    </div>

                    <div className="col-8 pt-3 mx-auto" style={{display: 'flex', justifyContent: 'center', textShadow: '-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white'}}>
                        <input type="submit" className="btn btn-info" value="Send" />
                    </div>
                </form>
                <div className="contact_links" style={{padding: " 0 20px", color: "white", border: "solid 5px white"}}>
                    <div style={{paddingTop: "10px"}}>
                        <h2 >linked in</h2>
                        <h2>instagram</h2>
                        <h2>twitter</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection