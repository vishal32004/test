import React, { useState } from "react";
import InputField from "../InputField";

const OneTimeForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    twitter: "",
    facebook: "",
    gplus: "",
    email: "",
    pass: "",
    cpass: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderInputFields = (fields) => {
    return fields.map((field, index) => (
      <InputField
        key={index}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name]}
        onChange={handleChange}
      />
    ));
  };

  const formFields = [
    { type: "text", name: "user", placeholder: "Name" },
    { type: "email", name: "envelope", placeholder: "Email" },
    { type: "text", name: "phone", placeholder: "Phone" },
    { type: "text", name: "twitter", placeholder: "Twitter" },
    { type: "text", name: "facebook", placeholder: "Facebook" },
    { type: "text", name: "gplus", placeholder: "Google Plus" },
    { type: "text", name: "email", placeholder: "Email" },
    { type: "password", name: "pass", placeholder: "Password" },
    { type: "password", name: "cpass", placeholder: "Confirm Password" },
  ];

  const donateOptions = [
    { value: "₹ 5000", label: "₹ 5000" },
    { value: "₹ 10000", label: "₹ 10000" },
    { value: "₹ 15000", label: "₹ 15000" },
    { value: "Other", label: "Other" },
  ];

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form id="msform" onSubmit={handleSubmit}>
          <ul id="progressbar">
            <li className={step >= 1 ? "active" : ""}>Step 1</li>
            <li className={step >= 2 ? "active" : ""}>Step 2</li>
            <li className={step >= 3 ? "active" : ""}>Step 3</li>
          </ul>
          <fieldset style={{ display: step === 1 ? "block" : "none" }}>
            <div className="pick-an-amount">
              <i className="fa-sharp fa-solid fa-gift"></i>
              <p>Choose An Amount to donate</p>
            </div>
            <div className="custom-choose mb-3">
              {donateOptions.map((option, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={`opt-${index}`}
                    value={option.value}
                    name="donation"
                  />
                  <label htmlFor={`opt-${index}`}>{option.label}</label>
                </React.Fragment>
              ))}
              <div>
                <p style={{ fontSize: "15px" }}>
                  <i className="fa-sharp fa-solid fa-shield-check me-2"></i>
                  Provide a camera trap to monitor rhino/tiger populations.
                </p>
              </div>
            </div>
            <h2 className="fs-title">
              <i className="fa-duotone fa-box-ballot me-2"></i> Enter Your
              Credentials
            </h2>
            {renderInputFields(formFields.slice(0, 3))}
            <input
              type="button"
              className="next action-button"
              onClick={nextStep}
              value="Donate Now"
            />
          </fieldset>
          <fieldset style={{ display: step === 2 ? "block" : "none" }}>
            {renderInputFields(formFields.slice(3, 6))}
            <input
              type="button"
              className="previous action-button-previous"
              onClick={prevStep}
              value="Previous"
            />
            <input
              type="button"
              className="next action-button"
              onClick={nextStep}
              value="Next"
            />
          </fieldset>
          <fieldset style={{ display: step === 3 ? "block" : "none" }}>
            {renderInputFields(formFields.slice(6))}
            <input
              type="button"
              className="previous action-button-previous"
              onClick={prevStep}
              value="Previous"
            />
            <input
              type="submit"
              className="submit action-button"
              value="Submit"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default OneTimeForm;
