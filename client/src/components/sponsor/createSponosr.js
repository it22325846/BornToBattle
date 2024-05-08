import React, { useState } from "react";
import axios from "axios";
import {useNavigate, useLocation } from "react-router-dom";

export default function SponsorClaim() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  // State variables to store form data
  const [sponsorName, setSponsorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const sponsorType = searchParams.get("sponsorType")
  const [sponsorPosition, setSponsorPosition] = useState("");
  const [companyLogo, setCompanyLogo] = useState();
  const [contactPerson, setContactPerson] = useState(0);
  const [companyPhone, setCompanyPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [state, setCityState] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  // Event handler functions to update state variables
  const handleSponsorNameChange = (event) => {
    setSponsorName(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  // const handleSponsorTypeChange = (event) => {
  //   setSponsorType(event.target.value);
  // };

  const handleSponsorPositionChange = (event) => {
    setSponsorPosition(event.target.value);
  };

  const handleCompanyLogoChange = (event) => {
    console.log(event.target.files[0]);
    setCompanyLogo(event.target.files[0]);
  };

  const handleContactPersonChange = (event) => {
    setContactPerson(event.target.value);
  };

  const handleCompanyPhoneChange = (event) => {
    setCompanyPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityStateChange = (event) => {
    setCityState(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const submitSponosr = (t) => {
    t.preventDefault();

    const sponsorFormData = new FormData();
    sponsorFormData.append("sponsorName", sponsorName);
    sponsorFormData.append("companyName", companyName);
    sponsorFormData.append("sponsorType", sponsorType);
    sponsorFormData.append("sponsorPosition", sponsorPosition);
    sponsorFormData.append("companyLogo", companyLogo);
    sponsorFormData.append("contactPerson", contactPerson);
    sponsorFormData.append("companyPhone", companyPhone);
    sponsorFormData.append("address", address);
    sponsorFormData.append("state", state);
    sponsorFormData.append("email", email);
    sponsorFormData.append("website", website);

    axios
      .post("http://localhost:8020/sponsor/add", sponsorFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Sponsor added successfully.");
        navigate(`/sponsorread`)
      })  
      .catch((err) => {
        console.error("Error adding sponsor:", err);
        alert("Sponsor creation failed.");
      });
  };
  return (
    <div>
      <div classNameName="container m-5">
        <form
          className="row g-3 bg-gradient text-white p-4 text-start rounded-4 m-5"
          style={{backgroundImage: 'url("../../../Images/red_and_black.jpg")', backgroundSize: 'cover',borderRadius: '20px'}}
          onSubmit={submitSponosr}
        >
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-md-12">
              <label htmlFor="sponsorName" className="form-label">
                Sponsor Name
              </label>
              <input
                type="text"
                className="form-control"
                id="sponsorName"
                placeholder="Type name"
                onChange={handleSponsorNameChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-8">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="companyLogo" className="form-label">
                Sponsor Type
              </label>
              <input
                type="text"
                name="sponsorType"
                className="form-control"
                id="sponsorType"
                value = {sponsorType}
                readOnly
                // onChange={handleSponsorTypeChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-md-6">
              <label htmlFor="sponsorPosition" className="form-label">
                Sponsor Position
              </label>
              <input
                type="text"
                className="form-control"
                id="sponsorPosition"
                onChange={handleSponsorPositionChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyLogo" className="form-label">
                Company Logo
              </label>
              <input
                type="file"
                name="companyLogo"
                className="form-control"
                id="companyLogo"
                onChange={handleCompanyLogoChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-md-6">
              <label htmlFor="contactPerson" className="form-label">
                Contact Person
              </label>
              <input
                type="number"
                className="form-control"
                id="contactPerson"
                onChange={handleContactPersonChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyPhone" className="form-label">
                Company Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="companyPhone"
                onChange={handleCompanyPhoneChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-12">
              <label htmlFor="state" className="form-label">
                City/State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Apartment, studio, or floor"
                onChange={handleCityStateChange}
              />
            </div>
          </div>
          <div className="row col-12" style={{textAlign: 'start' }}>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">
                WebSite
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                onChange={handleWebsiteChange}
              />
            </div>
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-danger p-3" style={{width: '300px', fontSize: 'larger', fontWeight: 'bolder'}}>
                Get Sponsorship
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
