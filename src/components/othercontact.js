import React from 'react';
import './css/othercontact.css';

class OC extends React.Component {
    render() {
        return(
            <div className="all-oc">
                <div className="dop-div-oc">
                    <div className="div-oc first-table">
                        <h1 className="name-oc">Bookstore</h1>
                        <p className="about-first-oc">Aleksandrov Str. Salam Adil, Building 58.</p>
                        <p className="about-first-oc">Tristique vestibulum,</p>
                        <p className="about-first-oc">Lorem ipsum dolor</p>
                    </div>
                    <div className="div-oc second-table">
                        <h1 className="other-oc">Keep in touch</h1>
                        <p className="about-second-oc">+7 (927) 336-25-93</p>
                        <p className="about-second-oc">yasowe2816@coalamails.com</p>
                    </div>
                    <div className="div-oc third-table">
                        <h1 className="about-us-h1-oc">About Us</h1>
                        <p className="mini-about-us-oc">Sed vestibulum posuere ante, eget blandit metus. Morbi sodales feugiat erat,
                        et placerat sapien suscipit ut.</p>
                        <ul className="icon-about-oc">
                            <li className="icon-about-oc-li"></li>
                            <li className="icon-about-oc-li"></li>
                            <li className="icon-about-oc-li"></li>
                            <li className="icon-about-oc-li"></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="copyright-div">
                        <p className="copyright">Copyright © 2020 Huzzky | Design: Huzzky</p>
                </div>
            </div>
        );
    }
}

export default OC;