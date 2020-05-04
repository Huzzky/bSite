import React from 'react';
import './css/cu.css';
import fonCU from './images/fon-contactus.jpg';

class ContactUS extends React.Component {


    render() {
        return (
            <div className="all-cu" style={{backgroundImage: 'url(' + fonCU + ')'}}>
                <div className="fon-cu">
                    <div className="h1-cu-txt">
                        <h1 className="txt-cu">Contact Us</h1>
                    </div>
                    <form action="post" className="fm-cu">
                        <div className="form-div">
                            <div className="n-e-div">
                                <div className="n-e">
                                    <input type="text" placeholder="Your name..." className="i-txt-name" required/>
                                    <input type="tel" placeholder="Your phone..." className="i-txt-phone" required/>
                                </div>
                            </div>
                            <div className='div-input'><input type="email" placeholder="Email" className="input-txt-email" required/></div>
                            <div className="div-input"><textarea placeholder="Your message..." name="" id="" cols="15" rows="5" className="input-txt-message" required></textarea></div>
                            <button className="send-form-cu">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUS;