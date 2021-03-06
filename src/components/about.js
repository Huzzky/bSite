import React from 'react';
import './css/about.css';
import fimageabout from './images/1-image-about.jpeg';
import simageabout from './images/2-image-about.jpeg';
import timageabout from './images/3-image-about.jpeg';
import foimageabout from './images/4-image-about.jpeg';

class About extends React.Component {
    render () {
        return (
            <div className='About-all'>
                <div className="txt-abt">
                    <h5 className="txt-h5-abt">INTRODUCING SCENIC</h5>
                    <h1 className="txt-h1-abt">Lorem ipsum lorem ipsum ipsum. Sed ornare, tortor nec placerat lacinia, leo quam rutrum leo,
                    eget posuere ipsum sem eu justo. Integer nunc libero</h1>
                </div>

                <div className='img-div cs-style-1'>
                    <div className="fr">
                    <a href="fi"><figure>
                        <div className="img-trans">
                        <img src={fimageabout} alt="Первая картинка" className="img-about"/></div>
                        <figcaption className="fig-1">
                            <div className="fon-black"></div>
                            <h3 className="first-h3">The Lorem ipsum</h3>
                        </figcaption>                 
                    </figure></a></div>

                    <div className="fr">
                    <a href="se"><figure>
                    <div className="img-trans">
                        <img src={simageabout} alt="Вторая картинка" className="img-about"/></div>
                        <figcaption className="fig-1">
                        <div className="fon-black"></div>
                        <h3 className="first-h3">The Lorem ipsum</h3>
                        </figcaption>
                    </figure></a></div>

                    <div className="sr">
                    <a href="th"> <figure>
                    <div className="img-trans">
                        <img src={timageabout} alt="Третья картинка" className="img-about "/></div>
                        <figcaption className="fig-2">
                        <div className="fon-black-2"></div>
                        <h3 className="second-h3">The Lorem ipsum</h3>
                        </figcaption>
                    </figure></a></div>

                    <div className="sr">
                    <a href="fo"> <figure>
                    <div className="img-trans">
                        <img src={foimageabout} alt="Четвертая картинка" className="img-about "/></div>
                        <figcaption className="fig-2">
                        <div className="fon-black-2"></div>
                        <h3 className="second-h3">The Lorem ipsum</h3>
                        </figcaption>
                    </figure></a></div>

                </div>
            </div>
        );
    }
}

export default About;