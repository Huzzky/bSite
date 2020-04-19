import React from 'react';
import './css/boa.css';
import auth1 from './images/auth-1.jpg';
import auth2 from './images/auth-2.jpg';
import auth3 from './images/auth-3.jpg';
import auth4 from './images/auth-4.jpg';
import auth5 from './images/auth-5.jpg';

class BOA extends React.Component {
    render () {
        return (
            <div className="boa-all">
                <div className="div-all-2">
                    <h1 className="h1-boa">Best Our Authors</h1>               
                <div className="img-authors-div">
                    <div className="div-img">                
                            <img src={auth1} alt="" className="img-auth"/>                   
                    </div>
                    <div className="div-img">                       
                            <img src={auth2} alt="" className="img-auth"/>                           
                    </div>
                    <div className="div-img">                     
                            <img src={auth3} alt="" className="img-auth"/>                        
                    </div>
                    <div className="div-img">
                        <img src={auth4} alt="" className="img-auth"/>                                          
                    </div>
                    <div className="div-img">
                        <img src={auth5} alt="" className="img-auth"/>                                       
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default BOA;