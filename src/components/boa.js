import React from 'react';
import './css/boa.css';
import auth1 from './images/auth-1.jpg';
import auth2 from './images/auth-2.jpg';
import auth3 from './images/auth-3.jpg';
import auth4 from './images/auth-4.jpg';
import auth5 from './images/auth-5.jpg';
import auth6 from './images/auth-6.jpg';

class BOA extends React.Component {
    render () {
        return (
            <div className="boa-all">
                <div>
                <h1 className="h1-boa">Best Our Authors</h1></div>
                <div className="img-authors-div">
                    <ul className="ul-img-auth">
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth1} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth2} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth3} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth4} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth5} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                        <li className="img-li-auth">
                            <figure>
                                <img src={auth6} alt="" className="img-auth"/>
                                    <figcaption>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                        <li><img src="" alt="" className="icon-auth-sw"/></li>
                                    </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BOA;