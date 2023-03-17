import "./HeroStyles.module.css";
import pic from "./../assets/images/Heroimage.JPG";
import Cit from "./../components/cit/Cit";
function Hero(props) {
  return (
    <>
      <br />
      <div
        className="hero"
        style={{
          backgroundImage: "linear-gradient(to right,#00093c, #510b44)",
        }}
      >
        <img
          alt="heroimage"
          src={pic}
          className="heroimage"
          style={{ width: "98%", height: "100%", objectFit: "cover" }}
        />
        <div className="banner-content">
          <Cit />
          <br />
        </div>
      </div>
    </>
  );
}

export default Hero;
