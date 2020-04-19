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
        this.clickImg = this.clickImg.bind(this);
    }
    clickImg() {
        this.setState(prevState => {
            return{
                count: prevState+1,
            }})
    }
    render () {
        return (
            <div className="boa-all">
                <div className="div-all-2">
                    <h1 className="h1-boa">Best Our Authors</h1>   


                    <div className='img-div cs-style-2'>
                    <figure className="fig-img">
                        <div className="img-trans-auth">             
                            <img src={this.state.auth} alt="" className="img-auth"/>  
                            <figcaption className="fig-img-1">
                            <button className="mark marker-1">></button><button className="mark marker-2">></button>
                        </figcaption></div>
                        </figure>

                </div>
                </div>
            </div>
        );
    }
}

export default BOA;