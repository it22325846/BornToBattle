import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCandidate() {

    const { candidateId } = useParams();
    console.log("candidate id: ", candidateId);
    
    const navigate = useNavigate();
  
    const [name, setUpdateName] = useState("");
    const [age, setUpdateAge] = useState(0);
    const [gender, setUpdateGender] = useState("");
    const [email, setUpdateEmail] = useState("");
    const [contact_number, setUpdateContactNumber] = useState(0);
    const [comp_type, setUpdateCompType] = useState("");
    const [image, setUpdateImage] = useState();
  
    const handleFileChange = (e) => {
      setUpdateImage(e.target.files[0]);
    };

    useEffect( () => {
        axios.get(`http://localhost:8020/payment/get/${candidateId}`)
        .then( (res) => {
            setUpdateName(res.data.name);
            setUpdateAge(res.data.age);            
            setUpdateGender(res.data.gender);            
            setUpdateEmail(res.data.email);            
            setUpdateContactNumber(res.data.contact_number);            
            setUpdateCompType(res.data.comp_type);
            setUpdateImage(res.data.image);                                    
        }).catch( (err) => {
            alert("candidate data fetch failed")
        })
    }, [candidateId])
  
    const updateCandidate = (e) => {
      e.preventDefault();
  
      const updateCandids = {
        name,
        age,
        gender,
        email,
        contact_number,
        comp_type,
        image,
      }
  
      axios
        .put(`http://localhost:8020/payment/update/${candidateId}`, updateCandids)
        .then(() => {
          console.log(Error);
          alert("Payment updated");
        })
        .catch((err) => {
          alert("payment update failed");
        });

        console.log("Update Payload:", updateCandids);
    };
  
    return (
      <div className="container bg-dark p-3 rounded text-white">
        <div className="overlay22">
          <div className="overlay22-text">
            <h1>Payment Form</h1>
          </div>
        </div>
  
        <div className="container">
          <form className="form" onSubmit={updateCandidate}>
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
                  value={name}
                  onChange={(e) => setUpdateName(e.target.value)}
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
                  value={age}
                  onChange={(e) => setUpdateAge(e.target.value)}
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
                  
                  value={gender}
                  onChange={(e) => setUpdateGender(e.target.value)}
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
                  value={email}
                  onChange={(e) => setUpdateEmail(e.target.value)}
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
                  value={contact_number}
                  onChange={(e) => setUpdateContactNumber(e.target.value)}
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
                  value={comp_type}
                  onChange={(e) => setUpdateCompType(e.target.value)}
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
              update
            </button>
          </form>
        </div>
      </div>
    );
}
