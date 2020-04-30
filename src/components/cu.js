import React from 'react';
import './css/cu.css';

class ContactUS extends React.Component {
    render() {
        return (
            <div className="all-cu">
                <div className="fon-cu">
                    <form action="post" className="fm-cu">
                        <div className="form-div">
                        <div className="n-e">
                            <input type="text" className="i-txt"/>
                            <input type="text" className="i-txt"/>
                        </div>
                        <div className='div-input'><input type="text" className="input-txt"/></div>
                        <div className="div-input"><input type="text" className="input-txt"/></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUS;