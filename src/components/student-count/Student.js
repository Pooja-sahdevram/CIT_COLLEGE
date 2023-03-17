import "./student.css";

const Student = () => {
  // function count(props) {
  //   for (i = 0; i < props - 1; i++) {
  //     return i;
  //   }
  //   return props;
  // }
  return (
    <div className="student-count" style={{ backgroundColor: "white" }}>
      <div className="outer">
        <div className="inner">
          <i class="fa-sharp fa-solid fa-user"></i>{" "}
          <h4 className="count-number-title">2100+</h4>
          <p className="count-title">Students</p>
        </div>
        <div className="inner">
          <i class="fa-solid fa-graduation-cap"></i>
          <h4 className="count-number-title">2000+</h4>
          <p className="count-title">Proud Alumni</p>
        </div>
        <div className="inner">
          <i className="fa-solid fa-building-columns"></i>{" "}
          <h4 className="count-number-title">1250+</h4>
          <p className="count-title">Campus Placements</p>
        </div>
        <div className="inner">
          <i class="fa-sharp fa-solid fa-building"></i>
          <h4 className="count-number-title">13+ Year</h4>
          <p className="count-title">Excellence in Education</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
