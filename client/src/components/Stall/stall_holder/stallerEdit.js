import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StallerEdit() {

    const { Stallerid } = useParams();
    console.log("Staller id :" , Stallerid);

    const navigate = useNavigate();

    const [sbn, setUpdateSbn] = useState('');
    const [companyName, setUpdateCompanyName] = useState('');
    const [firstName, setUpdateFirstName] = useState('');
    const [lastName, setUpdateLastName] = useState('');
    const [mobile, setUpdateMobile] = useState(0);
    const [address, setUpdateAddress] = useState('');
    const [city, setUpdateCity] = useState('');
    const [province, setUpdateProvince] = useState('');
    const [postalCode, setUpdatePostalCode] = useState(0);
    const [email, setUpdateEmail] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8020/staller/get/${Stallerid}`).then((res) => {

            console.log(res);

            setUpdateSbn(res.data.sbn);
            setUpdateCompanyName(res.data.companyName);
            setUpdateFirstName(res.data.firstName);
            setUpdateLastName(res.data.lastName);
            setUpdateMobile(res.data.mobile);
            setUpdateAddress(res.data.address);
            setUpdateCity(res.data.city);
            setUpdateProvince(res.data.province);
            setUpdatePostalCode(res.data.postalCode);
            setUpdateEmail(res.data.email);

        }).catch((err) => {
            alert("weda na", err);
        });
    }, [Stallerid])


    const editStaller = (t) => {
        t.preventDefault();

        const updateStaller = {
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

        axios.put(`http://localhost:8020/staller/update/${Stallerid}`, updateStaller)
            .then(result => {
                console.log(result);
                alert("Staller updated successfully.");
                navigate('/stallerprofile');
            })  
            .catch((err) => {
                console.error("Error updating staller:", err);
                alert("Failed to update staller. Check console for details.");
            });

            console.log("Update Payload:", updateStaller);
    };

    return (
        <div className="container mt-5 text-start text-white p-5 rounded-4 bg-gradient" style={{ backgroundColor: '#05242a' }}>

            <div className="text-center mb-5">
                <h2>Edit Your Profile</h2>
            </div>

            <form className="row g-3  text-primary " onSubmit={editStaller} >

                <div className="col-md-6">
                    <label htmlFor="sbn" className="form-label">Sri lankan Business Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sbn"
                        value= {sbn}
                        onChange={(t) => { setUpdateSbn(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        value= {companyName}
                        onChange={(t) => { setUpdateCompanyName(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value= {firstName}
                        onChange={(t) => { setUpdateFirstName(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value= {lastName}
                        onChange={(t) => { setUpdateLastName(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input
                        type="number"
                        className="form-control"
                        id="mobile"
                        value= {mobile}
                        onChange={(t) => { setUpdateMobile(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value= {address}
                        onChange={(t) => { setUpdateAddress(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        value= {city}
                        onChange={(t) => { setUpdateCity(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="province" className="form-label">Province</label>
                    <input
                        type="text"
                        className="form-control"
                        id="province"
                        value= {province}
                        onChange={(t) => { setUpdateProvince(t.target.value) }}

                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="postalCode" className="form-label">Postal / Zip Code</label>
                    <input
                        type="number"
                        className="form-control"
                        id="postalCode"
                        value= {postalCode}
                        onChange={(t) => { setUpdatePostalCode(t.target.value) }}

                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="Validationemail" className="form-label">Email*</label>
                    <input
                        type="email"
                        className="form-control"
                        id="Validationemail"
                        value= {email}
                        onChange={(t) => { setUpdateEmail(t.target.value) }}

                    />
                </div>
                <div className="mb-2 mt-4">
                    <button type="submit" className="btn btn-warning">Update</button>
                </div>
            </form>
        </div>
    )
}
