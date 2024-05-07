import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContactNumber] = useState(0);
  const [comp_type, setCompType] = useState("");
  const [image, setImage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addContent = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("contact_number", contact_number);
    formData.append("comp_type", comp_type);
    formData.append("image", image);

    axios
      .post("http://localhost:8020/candidate/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log(Error);
        alert("Request sent.");
        navigate('/pDetails');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container bg-dark p-3 rounded text-white">
      <div className="overlay22">
        <div className="overlay22-text">
          <h1>Payment Form</h1>
        </div>
      </div>

      <div className="container">
        <form className="form" onSubmit={addContent}>
          <div className="row">
            <div className="col-md-6">
              <label className="black-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="black-label" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your age"
                id="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="black-label" htmlFor="gender">
                Gender
              </label>
              <select
                className="form-control"
                id="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="black-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="black-label" htmlFor="contact_number">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your contact number"
                id="contact_number"
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="black-label" htmlFor="comp_type">
                Competition Type
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter competition type"
                id="comp_type"
                onChange={(e) => setCompType(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Slip Input
            </label>
            <input
              className="form-control"
              type="file"
              id="image"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
