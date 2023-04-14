import React from "react";
import "./footer.css";
import logo from "./../../assets/Logo1.png";
function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="first-section">
          <div className="content">
            <img src={logo} alt="img" className="footer-img" />
            <div className="desc">
              <div>
                <i class="fas fa-map-marker-alt"></i>
                <>
                  Chartered Institute of Technology Village Danvav, Mt. Road,
                  Abu Road Dist. Sirohi, Rajasthan - 307510.
                </>
                <div className="location-det">
                  <br />

                  <i class="far fa-envelope"></i>
                  <a>citaburoad@gmail.com</a>
                </div>
                <div>
                  <br />
                  <i class="fas fa-phone-alt"></i>
                  <a>+91 99293 91380</a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>
              About{" "}
              <div className="underline">
                <span></span>
              </div>
            </h2>
            <div className="desc">
              <div>
                {" "}
                <a href="">The Institute</a>
              </div>
              <div>
                {" "}
                <a href="">Vision & Mission</a>
              </div>
              <div>
                {" "}
                <a href="">Location</a>
              </div>
              <div>
                {" "}
                <a href="">Mandatory Disclosure</a>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>
              DEPARTMENTS
              <div className="underline">
                <span></span>
              </div>
            </h2>
            <div className="desc">
              <div>
                {" "}
                <a href="">Computer Science</a>
              </div>
              <div>
                {" "}
                <a href="">Civil</a>
              </div>
              <div>
                {" "}
                <a href="">Electrical</a>
              </div>
              <div>
                {" "}
                <a href="">Mechanical</a>
              </div>
              <div>
                {" "}
                <a href="">Electronics & Communication</a>
              </div>
              <div>
                {" "}
                <a href="">Basic Science</a>
              </div>
            </div>
          </div>

          <div className="content">
            <h2>
              ACADEMIC
              <div className="underline">
                <span></span>
              </div>{" "}
            </h2>
            <div className="desc">
              <div>
                {" "}
                <a href="">Principal Profile</a>
              </div>
              <div>
                {" "}
                <a href="">Faculty Profile</a>
              </div>
              <div>
                {" "}
                <a href="">Admin Staff</a>
              </div>
              <div>
                {" "}
                <a href="">Recognition</a>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>
              QUICK LINKS
              <div className="underline">
                <span></span>
              </div>
            </h2>
            <div className="desc">
              <div>
                {" "}
                <a href="">Consolidated Marksheet</a>
              </div>
              <div>
                {" "}
                <a href="">Correction In Name</a>
              </div>
              <div>
                {" "}
                <a href="">Duplicate Certificate</a>
              </div>
              <div>
                {" "}
                <a href="">Migration Certificate</a>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>
              DOWNLOADS{" "}
              <div className="underline">
                <span></span>
              </div>
            </h2>
            <div className="desc">
              <div>
                <a href="">Brochure</a>
              </div>
              <div className="x">
                {" "}
                <a className="btn1">Applying</a>
                <a className="btn2">Scholarship</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="second-section">
          <div>
            <a>Copyright © 2023 ME </a>|<a> All Rights Reserved</a>|
            <a> Privacy & Policy</a>
          </div>
          <div className="social-mediaicons">
            <a href="">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>{" "}
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>{" "}
            </a>
            <a href="">
              <i class="fa-brands fa-pinterest-p"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
