import React from 'react';
import './css/nav.css';
import videohead from './videos/video.mp4';

class NAV extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }
    }

render(){
    return(
        <div className="nav-div">
            <div className="div-vid">
                <video autoPlay loop muted className="video-header">
                    <source src={videohead}></source>
                </video>
            </div>
            <div className="h1-div">
                <div className="dop-div">
                    <ul className="ul-li">
                        <li className="nav-txt logo-txt">Scenic</li>
                        <li className="nav-txt r-nav">HOME</li>
                        <li className="nav-txt r-nav">STUDIO</li>
                        <li className="nav-txt r-nav">OUR PEOPLE</li>
                        <li className="nav-txt r-nav">LET'S TALK</li>
                    </ul>
                </div>
            </div>
                <div className="h1-p-btn">
                    <h1 className="h1-header">Lorem ipsum dolor sit amet, consectetur!</h1>
                    <p className="p-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet quam.</p>
                    <button className="btn-header">Discover More</button>
                </div>
            
        </div>
    );
}}

export default NAV;