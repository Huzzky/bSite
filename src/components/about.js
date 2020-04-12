import React from 'react';
import './css/about.css';
import fimageabout from './images/1-image-about.jpg';
import simageabout from './images/2-image-about.jpg';
import timageabout from './images/3-image-about.jpg';
import foimageabout from './images/4-image-about.png';

class About extends React.Component {
    render () {
        return (
            <div className='About-all'>
                <div className="txt-abt">
                    <h5 className="txt-h5-abt">INTRODUCING SCENIC</h5>
                    <h1 className="txt-h1-abt">This template is designed for you. Sed ornare, tortor nec placerat lacinia, leo quam rutrum leo,
                    eget posuere ipsum sem eu justo. Integer nunc libero</h1>
                </div>
                <div className='img-div cs-style-1'>
                    <a href="fi"><figure>
                        <img src={fimageabout} alt="Первая картинка" className="img-about fr"/>
                        <figcaption className="fig-1">
                            <div className="fon-black"></div>
                            <h3 className="about-img">The Best Books</h3>
                        </figcaption>                 
                    </figure></a>
                    <a href="se"><figure>
                        <img src={simageabout} alt="Вторая картинка" className="img-about fr"/>
                        <figcaption className="fig-1">
                        <div className="fon-black"></div>
                        <h3 className="about-img">The Best Books</h3>
                        </figcaption>
                    </figure></a>
                    <a href="th"> <figure>
                        <img src={timageabout} alt="Третья картинка" className="img-about sr"/>
                        <figcaption className="fig-2">
                        <div className="fon-black-2"></div>
                        <h3 className="about-img">The Best Books</h3>
                        </figcaption>
                    </figure></a>
                    <a href="fo"> <figure>
                        <img src={foimageabout} alt="Четвертая картинка" className="img-about sr"/>
                        <figcaption className="fig-2">
                        <div className="fon-black-2"></div>
                        <h3 className="about-img">The Best Books</h3>
                        </figcaption>
                    </figure></a>
                </div>
            </div>
        );
    }
}

export default About;