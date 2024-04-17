import axios from "axios";
import React, { useState } from "react";

export default function StallReg() {

    // State variables to store form data
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

        /* Process the form data (you can send it to a server, etc.)
        console.log('SBN:', sbn);
        console.log('Company Name:', companyName);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Mobile:', mobile);
        console.log('Address:', address);
        console.log('City:', city);
        console.log('province:', province);
        console.log('Postal Code:', postalCode);
        console.log('Email:', email);*/

        /*Reset the form after submission
        setSbn('');
        setCompanyName('');
        setFirstName('');
        setLastName('');
        setMobile(0);
        setaddress('')
        setCity('');
        setProvince('');
        setPostalCode(0);
        setEmail('');*/

        /*Reset the form after submission
        setSbn(sbn = '');
        setCompanyName(companyName = '');
        setFirstName(firstName = '');
        setLastName(lastName = '');
        setMobile(mobile = 0);
        setaddress(address = '')
        setCity(city = '');
        setProvince(province = '');
        setPostalCode(postalCode = 0);
        setEmail(email = '');*/


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

        axios.post("http://localhost:4000/staller/create", newStaller)
            .then(() => {
                alert("Staller added successfully.");
                // Reset the form here if needed
            })
            .catch((err) => {
                console.error("Error adding staller:", err);
                alert("Failed to add staller. Check console for details.");
            });

    };


    return (

        <div className="container mt-5 text-start text-white p-5 rounded-4 bg-gradient" style={{ backgroundColor: '#05242a' }}>

            <div className="text-center mb-5">
                <h2>2024 Dance Event</h2>
                <p>Stallholder Operations Form</p>
            </div>

            <form className="row g-3 text-primary" onSubmit={submitStaller} >

                <div className="col-md-12">
                    <label htmlFor="sbn" className="form-label">Sri lankan Business Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sbn"
                        placeholder="ex: SLR XXXXXXXXX"
                        onChange={(t) => { setSbn(t.target.value) }}

                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        onChange={(t) => { setCompanyName(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        onChange={(t) => { setFirstName(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        onChange={(t) => { setLastName(t.target.value) }}

                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        onChange={(t) => { setMobile(t.target.value) }}

                    />
                </div>

                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        onChange={(t) => { setaddress(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="ex: Colombo"
                        onChange={(t) => { setCity(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="province" className="form-label">Province</label>
                    <input
                        type="text"
                        className="form-control"
                        id="province"
                        placeholder="ex: West"
                        onChange={(t) => { setProvince(t.target.value) }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="postalCode" className="form-label">Postal / Zip Code</label>
                    <input
                        type="number"
                        className="form-control"
                        id="postalCode"
                        onChange={(t) => { setPostalCode(t.target.value) }}

                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="Validationemail" className="form-label">Email*</label>
                    <input
                        type="email"
                        className="form-control"
                        id="Validationemail"
                        onChange={(t) => { setEmail(t.target.value) }}
                        placeholder="example@example.com"

                    />
                </div>
                <div className="mb-2 mt-4">
                        <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
