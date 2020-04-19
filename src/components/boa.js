import React from 'react';
import './css/boa.css';
import auth1 from './images/auth-1.jpg';
import auth2 from './images/auth-2.jpg';
import auth3 from './images/auth-3.jpg';
import auth4 from './images/auth-4.jpg';
import auth5 from './images/auth-5.jpg';

class BOA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: auth1,
            count: 1,
            countimg: 0,
        };
        this.clickImgForward = this.clickImgForward.bind(this);
        this.clickImgBack = this.clickImgBack.bind(this);
    }
    clickImgForward() {
        if (this.state.count===1) {
            this.setState({auth:auth2, count:2})
        }
        else if (this.state.count===2) {
            this.setState({auth:auth3, count:3})
        }
        else if (this.state.count===3) {
            this.setState({auth:auth4, count:4})
        }
        else if (this.state.count===4) {
            this.setState({auth:auth5, count:5})
        }
        else if (this.state.count===5) {
            this.setState({auth:auth1, count:1})
        }
    }
    clickImgBack() {
        if (this.state.count===1) {
            this.setState({auth:auth5, count:5})
        }
        else if (this.state.count===5) {
            this.setState({auth:auth4, count:4})
        }
        else if (this.state.count===4) {
            this.setState({auth:auth3, count:3})
        }
        else if (this.state.count===3) {
            this.setState({auth:auth2, count:2})
        }
        else if (this.state.count===2) {
            this.setState({auth:auth1, count:1})
        }
    }
    render () {
        return (
            <div className="boa-all">
                <div className="div-all-2">
                    <h1 className="h1-boa">Sic parvis magna</h1>
                    <div className="img-and-abt">   
                        <div className='img-div cs-style-2'>
                            <figure className="fig-img">
                                <div className="img-trans-auth">             
                                    <img src={this.state.auth} alt="" className="img-auth"/>  
                                    <figcaption className="fig-img-1">
                                    <button className="mark marker-1" onClick={this.clickImgBack}>>
                                    </button><button className="mark marker-2" onClick={this.clickImgForward}>></button>
                                </figcaption></div>
                                </figure>           
                        </div>
                        <div className="about-auth-div">
                            <h1 className="abt-auth-h1">Lorem Ipsum</h1>
                            <p className="abt-auth-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus commodo gravida. 
                            In nisi nibh, iaculis id vulputate eu, lacinia eu urna. Nam mattis nec risus a vulputate. Class aptent.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BOA;