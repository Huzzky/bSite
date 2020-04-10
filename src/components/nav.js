import React from 'react';
import './css/nav.css';
import videohead from './videos/video.mp4';

class NAV extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            classNameDiv:'dop-div',
            scroolmy:0

        }}
    scrollSite(y){ //Функция для считывания Скрулла
        // this.setState(prevState => {
        //     return {
        //         scroolmy: prevState+=100
        //     }
        // })
        // if (y<0 && this.state.scroolmy<12){
        //     this.state.scroolmy++;
        //     this.setState({classNameDiv:"dop-div"});
        // }
        // else if (y>0){
        //     if (this.state.scroolmy===0){
        //         this.setState({classNameDiv:"dop-div"});
        //     }
        //     else{this.state.scroolmy--;}
        // }
        // console.log(this.state.scroolmy);

        if (window.scrollY<100) {
            this.setState({classNameDiv:'dop-div'});
            console.log(1, window.scrollY);
        } else if (window.scrollY > 100) {
            this.setState({classNameDiv:'dop-div-2'});
            console.log(2, window.scrollY);
        }


        // if (y>100) {
        //     this.setState({classNameDiv:'dop-div-2'});
        //     console.log(this.state.scroolmy);
        // }
        // else if (y<100) {
        //     this.setState({classNameDiv:"dop-div"});
        //     console.log(this.scroolmy);
        // }
    }

    componentWillMount(){
        window.addEventListener('wheel', (e) => {
            this.scrollSite(e.wheelDelta);
        })
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
                <div className={this.state.classNameDiv}>
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