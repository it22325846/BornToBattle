import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StallReg() {
    const navigate = useNavigate();

    const [sbn, setSbn] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState(0);
    const [address, setaddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState(0);
    const [email, setEmail] = useState('');

    const submitStaller = (t) => {
        t.preventDefault();

        const newStaller = {
            sbn,
            companyName,
            firstName,
            lastName,
            mobile,
            address,
            city,
            province,
            postalCode,
            email
        }

        axios.post("http://localhost:8020/staller/create", newStaller)
            .then(() => {
                alert("Staller added successfully.");
                navigate('/stallerprofile');
            })
            .catch((err) => {
                console.error("Error adding staller:", err);
                alert("Failed to add staller. Check console for details.");
            });

    };


    return (

        <div className="container mt-5 mb-5 p-5" style={{backgroundImage: 'url("../../../Images/red_and_black.jpg")', backgroundSize: 'cover', borderRadius: '20px', opacity: ''}}>
            <div className="text-center mb-5">
                <h2>2024 Dance Event</h2>
                <p className="text-white">Stallholder Registration Form</p>
            </div>

            <form className="streg row g-3 text-primary" onSubmit={submitStaller} style={{textAlign: 'start'}}>

                <div className="col-md-12">
                    <label htmlFor="sbn" className="form-label">Sri lankan Business Number : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="sbn"
                        placeholder="ex: SLR XXXXXXXXX"
                        onChange={(t) => { setSbn(t.target.value) }}

                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="companyName" className="form-label">Company Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        onChange={(t) => { setCompanyName(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        onChange={(t) => { setFirstName(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        onChange={(t) => { setLastName(t.target.value) }}

                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="mobile" className="form-label">Mobile : </label>
                    <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        onChange={(t) => { setMobile(t.target.value) }}

                    />
                </div>

                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        onChange={(t) => { setaddress(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="ex: Colombo"
                        onChange={(t) => { setCity(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="province" className="form-label">Province : </label>
                    <input
                        type="text"
                        className="form-control"
                        id="province"
                        placeholder="ex: West"
                        onChange={(t) => { setProvince(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="postalCode" className="form-label">Postal / Zip Code : </label>
                    <input
                        type="number"
                        className="form-control"
                        id="postalCode"
                        onChange={(t) => { setPostalCode(t.target.value) }}

                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="Validationemail" className="form-label">Email : </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Validationemail"
                        onChange={(t) => { setEmail(t.target.value) }}
                        placeholder="example@example.com"

                    />
                </div>
                <div className="mb-2 mt-4 ml-3">
                        <button className="btn btn-primary fw-bolder" type="submit" style={{fontWeight: 'bolder'}}>Register</button>
                </div>
            </form>
        </div>
    );
}
