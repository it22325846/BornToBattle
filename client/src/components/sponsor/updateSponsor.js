import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
  const { sponsorid } = useParams();
  console.log("Sponsor id :", sponsorid);

  const navigate = useNavigate();

  const [sponsorName, setUPSponsorName] = useState("");
  const [companyName, setUPCompanyName] = useState("");
  const [sponsorPosition, setUPSponsorPosition] = useState("");
  const [companyLogo, setUPCompanyLogo] = useState();
  const [contactPerson, setUPContactPerson] = useState(0);
  const [companyPhone, setUPCompanyPhone] = useState(0);
  const [address, setUPAddress] = useState("");
  const [state, setUPCityState] = useState("");
  const [email, setUPEmail] = useState("");
  const [website, setUPWebsite] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8070/sponsor/get/${sponsorid}`)
      .then((res) => {
        console.log(res);

        setUPSponsorName(res.data.sponsorName);
        setUPCompanyName(res.data.companyName);
        setUPSponsorPosition(res.data.sponsorPosition);
        setUPCompanyLogo(res.data.companyLogo);
        setUPContactPerson(res.data.contactPerson);
        setUPCompanyPhone(res.data.companyPhone);
        setUPAddress(res.data.address);
        setUPCityState(res.data.state);
        setUPEmail(res.data.email);
        setUPWebsite(res.data.website);
      })
      .catch((err) => {
        alert("sponsor updation failed.", err);
      });
  }, [sponsorid]);

  const editSponsor = (t) => {
    t.preventDefault();

    const sponsorUpdateData = new FormData();
    sponsorUpdateData.append("sponsorName", sponsorName);
    sponsorUpdateData.append("companyName", companyName);
    sponsorUpdateData.append("sponsorPosition", sponsorPosition);
    sponsorUpdateData.append("companyLogo", companyLogo);
    sponsorUpdateData.append("contactPerson", contactPerson);
    sponsorUpdateData.append("companyPhone", companyPhone);
    sponsorUpdateData.append("address", address);
    sponsorUpdateData.append("state", state);
    sponsorUpdateData.append("email", email);
    sponsorUpdateData.append("website", website);

    axios
      .put(
        `http://localhost:8070/sponsor/update/${sponsorid}`,
        sponsorUpdateData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((result) => {
        console.log(result);
        alert("Sponsor updated successfully.");
        navigate("/Users");
      })
      .catch((err) => {
        console.error("Sponsor updation error:", err);
        alert("Failed to update sponsor. Check console for details.");
      });

    console.log("Updation :", sponsorUpdateData);
  };

  // Event handler functions to update state variables
  const handleSponsorNameChange = (event) => {
    setUPSponsorName(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setUPCompanyName(event.target.value);
  };

  const handleSponsorPositionChange = (event) => {
    setUPSponsorPosition(event.target.value);
  };

  const handleCompanyLogoChange = (event) => {
    console.log(event.target.files[0]);
    setUPCompanyLogo(event.target.files[0]);
  };

  const handleContactPersonChange = (event) => {
    setUPContactPerson(event.target.value);
  };

  const handleCompanyPhoneChange = (event) => {
    setUPCompanyPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setUPAddress(event.target.value);
  };

  const handleCityStateChange = (event) => {
    setUPCityState(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUPEmail(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setUPWebsite(event.target.value);
  };

  return (
    <div>
      <div classNameName="container m-5">
        <form
          className="row g-3 bg-dark bg-gradient text-white p-4 text-start rounded-4 m-5"
          onSubmit={editSponsor}
        >
          <h2>Update User</h2>
          <div className="row g-2">
            <div className="col-12">
              <label htmlFor="sponsorName" className="form-label">
                Sponsor Name
              </label>
              <input
                type="text"
                className="form-control"
                id="sponsorName"
                placeholder="Type name"
                value={sponsorName}
                onChange={handleSponsorNameChange}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-12">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-md-6">
              <label htmlFor="sponsorPosition" className="form-label">
                Sponsor Position
              </label>
              <input
                type="text"
                className="form-control"
                id="sponsorPosition"
                value={sponsorPosition}
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
          <div className="row g-2">
            <div className="col-md-6">
              <label htmlFor="contactPerson" className="form-label">
                Contact Person
              </label>
              <input
                type="number"
                className="form-control"
                id="contactPerson"
                value={contactPerson}
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
                value={companyPhone}
                onChange={handleCompanyPhoneChange}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-12">
              <label htmlFor="state" className="form-label">
                City/State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Apartment, studio, or floor"
                value={state}
                onChange={handleCityStateChange}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
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
                value={website}
                onChange={handleWebsiteChange}
              />
            </div>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
