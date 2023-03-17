import "./Events.css";
import React, { useState } from "react";
import AllData from "./img_lib";
import background1 from "./../../assets/images/p1.png";
const Event = () => {
  const [images, setImage] = useState(AllData);

  const onlyRecreation = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };

  const onlyCampus = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });

    setImage(finalData);
  };
  const onlySeminar = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };
  const onlyExibition = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };
  const onlyArts = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };
  const onlyLakshy = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };
  const onlytarunye = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };
  const onlyCulture = (categoryItem) => {
    const finalData = AllData.filter((value) => {
      return value.category == categoryItem;
    });
    setImage(finalData);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        width: "100%",
        marginBottom: "2%",
      }}
    >
      {" "}
      <br />
      <br />
      <h2
        className="Heading"
        style={{
          margin: "3%",
          marginLeft: "12%",
          fontSize: "70px",
          textAlign: "left",
          textShadow: "2px 0 5px rgb(0, 0, 0)",
          color: "#065763",
        }}
      >
        IMAGE GALLARY
      </h2>
      <div className="Outerbox">
        <div className="Gallary">
          <ul className="menu">
            <li onClick={() => onlyArts("Arts")}>Arts</li>
            <li onClick={() => onlyRecreation("Recreation")}>Recreation</li>
            <li onClick={() => onlyCampus("campus")}>Campus</li>
            <li onClick={() => onlySeminar("Seminar")}>Seminar</li>
            <li onClick={() => onlyExibition("Exibition")}>Exibition</li>
            <li onClick={() => onlyLakshy("Lakshy")}>Lakshy</li>{" "}
            <li onClick={() => onlytarunye("tarunye")}>tarunye</li>
            <li onClick={() => onlyCulture("Culture")}>Culture</li>
          </ul>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {images.map((value) => {
              return (
                <div className="col mt-3">
                  <img src={value.image} className="img-fluid" alt="image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
