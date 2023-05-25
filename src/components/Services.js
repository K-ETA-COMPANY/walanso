import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import React from 'react'
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp3.png"

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="service" id="Services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="service-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme service-slider">
                            <div className="item">
                                <img src={meter1} alt="description" />
                                <h5>Training...</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="description" />
                                <h5>Design...</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="description" />
                                <h5>Dev...</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="description" />
                                <h5>Consorts...</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="description" />
    </section>
  )
}
