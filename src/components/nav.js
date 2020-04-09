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
            <nav>
                <ul>
                    <li className="nav-txt">Scenic</li>
                    <li className="nav-txt">HOME</li>
                    <li className="nav-txt">STUDIO</li>
                    <li className="nav-txt">OUR PEOPLE</li>
                    <li className="nav-txt">LET'S TALK</li>
                </ul>
            </nav>

        </div>
    );
}}

export default NAV;