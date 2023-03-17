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
                <br />

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
                <a href=""></a>The Institute
              </div>
              <div>
                {" "}
                <a href=""></a>Vision & Mission
              </div>
              <div>
                {" "}
                <a href=""></a>Location
              </div>
              <div>
                {" "}
                <a href=""></a>Mandatory Disclosure
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
                <a href=""></a>Computer Science
              </div>
              <div>
                {" "}
                <a href=""></a>Civil
              </div>
              <div>
                {" "}
                <a href=""></a>Electrical
              </div>
              <div>
                {" "}
                <a href=""></a>Mechanical
              </div>
              <div>
                {" "}
                <a href=""></a>Electronics & Communication
              </div>
              <div>
                {" "}
                <a href=""></a>Basic Science
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
                <a href=""></a>Principal Profile
              </div>
              <div>
                {" "}
                <a href=""></a>Faculty Profile
              </div>
              <div>
                {" "}
                <a href=""></a>Admin Staff
              </div>
              <div>
                {" "}
                <a href=""></a>Recognition
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
                <a href=""></a>Consolidated Marksheet
              </div>
              <div>
                {" "}
                <a href=""></a>Correction In Name
              </div>
              <div>
                {" "}
                <a href=""></a>Duplicate Certificate
              </div>
              <div>
                {" "}
                <a href=""></a>Migration Certificate
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
                <a href=""></a>Brochure
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
            <i class="fa-brands fa-facebook-f"></i>{" "}
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>{" "}
            <i class="fa-brands fa-linkedin-in"></i>{" "}
            <i class="fa-brands fa-pinterest-p"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
