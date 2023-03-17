import React from "react";
import "./Testimonial.css";
import Arman from "./../../assets/images/testi2.jpg";
import Vishal from "./../../assets/images/testi1.jpg";
import Deepak from "./../../assets/images/usericon.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-sidebar">
        <p className="test-tag-1">Testimonial</p>
        <p className="test-tag-2">Students</p>
        <p className="test-tag-3">Speaks</p>
      </div>
      <div className="testimonial-comment">
        <div className="testmonial-comment-1">
          <div className="t-comment  bg-grey"></div>
          <div className="t-comment ">
            <p className="comment-head">
              At Present, There Are Five Departments Within The Faculty:
              Department Of Geography And Environment.
            </p>
            <p className="comment-name">Arman Singh</p>
            <p className="comment-desig">Phycom Corporation</p>
            <img src={Arman} className="comment-icon" />
          </div>
          <div className="t-comment bg-grey"></div>
          <div className="t-comment bg-grey"></div>
        </div>
        <div className="testmonial-comment-2">
          <div className="t-comment tc-1">
            <p className="comment-head">
              At Present, There Are Five Departments Within The Faculty:
              Department Of Geography And Environment.
            </p>
            <p className="comment-name">Deepak Rathee (ME)</p>
            <p className="comment-desig">Sales Executive, Mayur Wovens</p>
            <img src={Deepak} className="comment-icon" />
          </div>
          <div className="t-comment bg-grey"></div>
          <div className="t-comment ">
            <p className="comment-head">
              At Present, There Are Five Departments Within The Faculty:
              Department Of Geography And Environment.
            </p>
            <p className="comment-name">Vishal Borana</p>
            <p className="comment-desig">Alma Connect</p>
            <img src={Vishal} className="comment-icon" />
          </div>
          <div className="t-comment bg-grey"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
