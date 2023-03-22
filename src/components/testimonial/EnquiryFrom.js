import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryFrom = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, number, message, city, state, branch } = e.target.elements;
    let conFom = {
      name: name.value,
      number: number.value,
      message: message.value,
    };
    name.value = "";
    number.value = "";
    message.value = "";
    city.value = "";
    state.value = "";
    branch.value = "";

    console.log(conFom);
    setFormStatus("Send");
  };
  const formClose = () => {
    const form = document.getElementsByClassName("enquiry-form");
    form[0].style.display = "none";
  };
  return (
    <div className="enquiry-form">
      <div className="enquiry-form-inner">
        <div className="e-header-section">
          <h4 className="e-header">Enquiry Form</h4>
          <div
            className="cross"
            onClick={() => {
              formClose();
            }}
          >
            <span>X</span>
          </div>
        </div>
        <div className="form-area">
          <form onSubmit={onSubmit}>
            <h5 className="e-h-en">Enter Your Enquiry here :</h5>
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="number"
                placeholder="Contact No.*"
                required
              />
            </div>
            <div className="mb-3 in">
              <select className="form-select" id="state" required>
                <option selected disabled value="">
                  Select State*
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat </option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh </option>
                <option value="Jammu and Kashmir">Jammu and Kashmir </option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala </option>
                <option value="Madhya Pradesh">Madhya Pradesh </option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur </option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram </option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab </option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana </option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="mb-3 in">
              <input
                className="form-control"
                type="text"
                id="city"
                placeholder="City/Town*"
                required
              />
            </div>
            <div className="mb-3 in">
              <select className="form-select" id="branch" required>
                <option selected disabled value="">
                  Interested in Branch*
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mechnical">Electrical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Electronics &amp; Comm.">
                  Mechanical Engineering
                </option>
                <option value="Electrical">
                  Electronics &amp; Communication
                </option>
              </select>
            </div>
            <div className="mb-3 in">
              <textarea
                className="form-control"
                id="message"
                placeholder="Enquiry*"
                required
              />
            </div>
            <div className="mb-3 in">
              <button
                className="s-btn"
                onClick={() => {
                  formClose();
                }}
                style={{
                  background: "#16093E",
                  width: "100%",
                  padding: "2px",
                  color: "whitesmoke",
                  fontSize: "20px",
                }}
                type="submit"
              >
                {formStatus}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryFrom;
