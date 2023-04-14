import React, { useEffect } from "react";
import "./CollegeRecognition.css";
import BTU from "../../assets/images/btu.jpg";
import RTU from "../../assets/images/rtu.jpg";
import AICTE from "../../assets/images/aicte.jpg";
import IAO from "../../assets/images/iao.jpg";
import ISTE from "../../assets/images/iste.jpg";
import Amazon from "../../assets/images/amazon.jpg";
import Infosys from "../../assets/images/infosys.jpg";
import Inox from "../../assets/images/inoxwind.jpg";
import Justdial from "../../assets/images/justdial.jpg";
import Justpay from "../../assets/images/juspay.jpg";
import Locanix from "../../assets/images/icanix.jpg";
import TCS from "../../assets/images/tata.jpg";

const CollegeRecognition = () => {
  const slides = [
    {
      image: ISTE,
      title: "ISTE",
      description: "Member of Indian Society for Technical Education",
    },
    {
      image: IAO,
      title: "IAO",
      description: "Approved By International Accredation Organization",
    },
    {
      image: BTU,
      title: "BTU",
      description: "Affilated to Bikaner Technical University",
    },
    {
      image: RTU,
      title: "RTU",
      description: "Affilated to Rajasthan Technical University",
    },
    {
      image: AICTE,
      title: "AICTE",
      description: "Approved by All India Council for Technical Education",
    },
    {
      image: ISTE,
      title: "ISTE",
      description: "Member of Indian Society for Technical Education",
    },
    {
      image: IAO,
      title: "IAO",
      description: "Approved By International Accredation Organization",
    },
    {
      image: BTU,
      title: "BTU",
      description: "Affilated to Bikaner Technical University",
    },
    {
      image: RTU,
      title: "RTU",
      description: "Affilated to Rajasthan Technical University",
    },
    {
      image: AICTE,
      title: "AICTE",
      description: "Approved by All India Council for Technical Education",
    },
    {
      image: ISTE,
      title: "ISTE",
      description: "Member of Indian Society for Technical Education",
    },
    {
      image: IAO,
      title: "IAO",
      description: "Approved By International Accredation Organization",
    },
    {
      image: BTU,
      title: "BTU",
      description: "Affilated to Bikaner Technical University",
    },
    {
      image: RTU,
      title: "RTU",
      description: "Affilated to Rajasthan Technical University",
    },
    {
      image: AICTE,
      title: "AICTE",
      description: "Approved by All India Council for Technical Education",
    },
    {
      image: ISTE,
      title: "ISTE",
      description: "Member of Indian Society for Technical Education",
    },
    {
      image: IAO,
      title: "IAO",
      description: "Approved By International Accredation Organization",
    },
  ];

  const images = [
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
    Amazon,
    Infosys,
    TCS,
    Inox,
    Locanix,
    Justdial,
    Justpay,
  ];

  const SlideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 410;
  };

  const SlideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 410;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      SlideLeft();
    }, 5000);
    const Ctimer = setInterval(() => {
      const Cslider = document.getElementById("c-slider");
      Cslider.scrollLeft = Cslider.scrollLeft + 240;
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="college-recognition-head">
        <p className="college-recognition-name">
          Chartered Institute of Technology
        </p>
        <p className="college-recognition-info">Our Recognitions</p>
      </div>

      <div className="college-recognition">
        <div className="main-ins-slider">
          <div id="slider">
            {slides.map((slide, index) => {
              return (
                <div className="slider-card">
                  <div className="slider-card-image">
                    <img className="slider-card-image-main" src={slide.image} />
                  </div>
                  <p className="slider-card-title">{slide.title}</p>
                  <p className="slider-card-description">{slide.description}</p>
                  {console.log(slide, index)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="placement">
          <div className="placement-com">PLACEMENT COMPANIES</div>
          <div className="placement-slogan">
            These leading Companies are our Top Recruiters, and we’ll ensure
            that every last student of our college gets hired.
          </div>
        </div>

        <div className="main-company-slider">
          <div id="c-slider">
            {images.map((slide, index) => {
              return (
                <div className="slider-company-card">
                  <img className="slider-card-image-company" src={slide} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeRecognition;
