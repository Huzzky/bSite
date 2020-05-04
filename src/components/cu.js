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
                                    <input type="text" className="i-txt-name"/>
                                    <input type="text" className="i-txt-phone"/>
                                </div>
                            </div>
                            <div className='div-input'><input type="text" className="input-txt-email"/></div>
                            <div className="div-input"><textarea name="" id="" cols="15" rows="5" className="input-txt-message"></textarea></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUS;