import React from 'react'
//import emailjs from 'emailjs-com'


const ContactSection = () => {
    const sendEmail = ()=> {
    
    }
    
    return (
        <div className="Contact" style={{padding: '75px 0', backgroundColor: '#0056C6',  }}>
            <div style={{display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={sendEmail}>
                    <div class="form-group">

                        <input type="text" class="form-control" id="name" placeholder="Your Name"  style={{fontSize: '1.2rem', fontFamily: 'lucida grande', display: 'flex', justifyContent: 'center'}}/>

                    </div>
                    <div class="form-group">

                        <input type="email" class="form-control" id="email" placeholder="Your Email Address"  style={{fontSize: '1.2rem', fontFamily: 'lucida grande'}}/>

                    </div>

                    <div className="form-group">
                        <textarea className="form-control" id="" placeholder="Your message here..." style={{fontSize: '1.2rem', fontFamily: 'lucida grande'}} />
                    </div>

                    <div class="col-8 pt-3 mx-auto" style={{display: 'flex', justifyContent: 'center', textShadow: '-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white'}}>
                        <input type="submit" class="btn btn-info" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection