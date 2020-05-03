import React from 'react';
import './css/cu.css';
import fonCU from './images/fon-contact.jpg';

class ContactUS extends React.Component {
    render() {
        return (
            <div className="all-cu"
            style={{backgroundImage: 'url(' + fonCU + ')'}}
            >
                <div className="fon-cu">
                    <h1 className="txt-cu">Contact Us</h1>
                    <form action="post" className="fm-cu">
                        <div className="form-div">
                            <div className="n-e-div">
                                <div className="n-e">
                                    <input type="text" className="i-txt-name"/>
                                    <input type="text" className="i-txt-phone"/>
                                </div>
                            </div>
                            <div className='div-input'><input type="text" className="input-txt-email"/></div>
                            <div className="div-input"><input type="text" className="input-txt-message"/></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUS;