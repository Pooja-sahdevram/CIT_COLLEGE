import "./SlickC.css";
import { useState, useEffect } from "react";
import pic1 from "./../../assets/scroll1.jpg";
import video1 from "./../../assets/videos/videoplayback.mp4";
import C1 from "../../assets/carosusle/com-lab5.JPG";
import C2 from "../../assets/carosusle/com-lab7.jpg";
import C3 from "../../assets/carosusle/ec1.jpg";
import C4 from "../../assets/carosusle/gp.jpg";

const SlickC = () => {
  const [index, setIndex] = useState(0);
  const images = [C1, C2, C3, C4];

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Slick" style={{ backgroundColor: "white" }}>
      <div
        className="slick_container"
        style={{
          backgroundImage: "linear-gradient(to right,#00093c, #510b44)",
        }}
      >
        <div className="part-1">
          <div className="part-2">
            <div className="bk">
              <img src={images[index]} id="carasoul-img" />
            </div>

            <h2>Welcome To Chartered Institute Of Technology</h2>
          </div>
        </div>
        <div className="part-1">
          <div className="part-2">
            <p>
              <br />
              Chartered Institute of Technology is an initiative by Gyan Raman
              Charitable Trust and Amongst Top 10 Best RTU Affiliated
              Engineering Colleges in Rajasthan. We believe in revolutionizing
              the conventional pattern of teaching through fresh ideas and
              innovations in the present education system. Chartered Institute
              of Technology Abu Road commits itself to prepare aspiring
              individuals for facing the challenges of the global world.The
              amalgamation of the finest training procedures and brilliant
              methods of inculcating professional ethics along with development
              of individuals pursuits make the nucleus of at Chartered Institute
              of Technology.Chartered Institute of Technology is privileged to
              provide a platform of focused, methodical and blissful learning,
              igniting and fostering the young minds, empowering them to carry
              out a revolution in the fields of Science & Technology that our
              future India dreams.
            </p>
            <video src={video1} autoPlay="true" loop="true" muted="true" />
          </div>
        </div>
        <div className="part-1">
          <button className="btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default SlickC;
