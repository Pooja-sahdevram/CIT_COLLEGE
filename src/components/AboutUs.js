import "./AboutUsStyles.css";
import Navbar from "./../components/Nav_Bar/Navbar";
import background from "./../assets/Event/1.png";
import pic1 from "./../assets/1.png";
import pic2 from "./../assets/2.png";
import pic3 from "./../assets/3.png";
import pic4 from "./../assets/iv.png";
import pic5 from "./../assets/Lovepik_com-401195244-cartoon-stereo-book.png";
function AboutUs() {
  return (
    <div className="aboutus" style={{ backgroundImage: `url(${background})` }}>
      <div className="firstblock">
        <div className="heading">
          {" "}
          <hr />
          <br />
          <br />
          <h1>ABOUT US</h1>{" "}
          <p className="block-1-text">
            EDUCATION IS NOT <br />
            PREPARATION FOR LIFE;
            <br /> EDUCATION IS LIFE ITSELF
          </p>
        </div>
        <div className="block1">
          <img alt="img" src={pic1} />
          <img alt="img" src={pic2} />
        </div>
      </div>

      <div className="block2">
        <img alt="img" src={pic3} />
        <img alt="img" src={pic4} />
        <img alt="img" src={pic5} className="pic5" />
      </div>
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
