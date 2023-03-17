import "./ACADEMIC PROGRAMS.css";
import Navbar from "./../components/Nav_Bar/Navbar";

function Academics_progrma() {
  return (
    <div className="Academics" style={{ backgroundColor: "#f5efe7" }}>
      <div className="block-1">
        <br />
        <br />
        <h2>ACADEMIC PROGRAMS</h2>
        <br />
        <p>
          EXPLORE UNIVERSITY'S 10+ COURSES ACROSS VARIOUGS SPECIALISATIONS THAT
          PROVOKE INTELLECTUAL AND INTUITIVE LEARNING AMONG STUDENTS.
        </p>
        <h3>/COURSES</h3>
      </div>
      <div className="branch1">
        <div className="element">
          {" "}
          <div className="block-wrapper">
            <div className="block-2">
              <h3>
                Computer <br />
                Science &<br /> Engineering
                <br /> Department
              </h3>
            </div>
            <div className="block-3">
              <h2>/Bachelor</h2>
              <a>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>{" "}
        </div>
        <div className="element">
          {" "}
          <div className="block-wrapper">
            <div className="block-2">
              <h3>
                Electrical & <br /> Electronics
                <br />
                Engineering
                <br /> Department
              </h3>
            </div>
            <div className="block-3">
              <h2>/Bachelor</h2>
              <a>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>{" "}
        </div>
        <div className="element">
          {" "}
          <div className="block-wrapper">
            <div className="block-2">
              <h3>
                Civil & <br /> Mechnical <br />
                Engineering
                <br /> Department
              </h3>
            </div>
            <div className="block-3">
              <h2>/Bachelor</h2>
              <a>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Academics_progrma;
