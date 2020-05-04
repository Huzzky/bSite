import React from 'react';
import './css/cu.css';
import fonCU from './images/fon-contactus.jpg';

class ContactUS extends React.Component {
    constructor() {
        super();
        this.state = {
            valueName: "Your name...",
            valuePhone: "Your phone...",
            valueEmail: "Your email...",
            valueMessage: "Your message...",

        }
        this.focusOn = this.focusOn.bind(this);
        this.focusOff = this.focusOff.bind(this);
    }
    focusOn(){
        if (this.state.valueEmail==="Your email...") {
            this.state.valueEmail="";
        }
    }
    focusOff(){
        console.log("8759")
    }


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
                                    <input type="text" placeholder="Your name..." className="i-txt-name"/>
                                    <input type="tel" placeholder="Your phone..." className="i-txt-phone"/>
                                </div>
                            </div>
                            <div className='div-input'><input type="email" placeholder="Email" className="input-txt-email" onBlur={this.focusOff} onFocus={this.focusOn}/></div>
                            <div className="div-input"><textarea placeholder="Your message..." name="" id="" cols="15" rows="5" className="input-txt-message"></textarea></div>
                            <button className="send-form-cu">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUS;