import React, { useState } from "react";
import axios from "axios";
import "../styles/req.css";

export default function RequestForm() {
  const [fname, setFName] = useState(" ");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");

  const addContent = (e) => {
    e.preventDefault();

    const requestform = {
      fname,
      lname,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      description,

    }

    axios
      .post("http://localhost:8020/requestform/add", requestform)
      .then(() => {
        alert("Request sent.");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className="overlay11">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay11-text">
          <h1 className="img_ga">MEDIA CENTER</h1>
        </div>
      </div>
      <div className="overlay22">
        <div className="overlay22-text">
          <h1>MEDIA CREDENTIAL APPLICATION</h1>
        </div>
      </div>

      <div className="container">
        <form className="form" onSubmit={addContent}>
          <div className="row">
            <div className="col">
              <label className="black-label" htmlFor="FirstName">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="fname"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="black-label" htmlFor="LastName">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lname"
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="black-label" htmlFor="inputEmail4">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="black-label" htmlFor="inputAddress">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address1"
              placeholder="1234 Main St"
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="black-label" htmlFor="inputAddress2">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment, studio, or floor"
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="black-label" htmlFor="inputCity">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="black-label" htmlFor="inputState">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="black-label" htmlFor="inputZip">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="black-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="custom-but" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
