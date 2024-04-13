import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BsEmojiSunglasses } from "react-icons/bs";

export default function StallerProfile() {
    const [stallers, setStallers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        function readStallers() {
            axios.post("http://localhost:4000/staller/read")
                .then((res) => {
                    setStallers(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        readStallers();
    }, []);

    function handleDelete(Stallerid) {
        axios.delete(`http://localhost:4000/staller/delete/${Stallerid}`)
            .then(() => {
                alert("Staller Deleted.")
                navigate('/')
            })
            .catch((err) => {
                alert("couldn't delete the staller.", err)
            })
    }


    return (
        <div className='container'>
            <div className="row col-sm-12 bg-white rounded-3 bg-opacity-25 no-gutters">
                <div className="col-sm-5 user-profile my-auto">
                    <div className="card-block text-center text-white">
                        <div className=" my-auto pb-1 rounded-3">
                            <img
                                src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                                className="img-radius img-flex rounded-circle img-fluid"
                                alt="User-Profile-Image"
                            />
                        </div>
                    </div>
                </div>
                {stallers.map((staller) => (
                    <div className="col-sm-7 p-3">
                        <div className="card-block p-4 rounded-3 text-start text-warning" style={{ backgroundColor: '#05242a' }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Sri lankan Business Number</p>
                                    <input value={staller.sbn} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <p>Company Name</p>
                                    <input value={staller.companyName} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>First Name</p>
                                    <input value={staller.firstName} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <p>Last Name</p>
                                    <input value={staller.lastName} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Mobile</p>
                                    <input value={staller.mobile} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <p>Address</p>
                                    <input value={staller.address} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>City</p>
                                    <input value={staller.city} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <p>Province</p>
                                    <input value={staller.province} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Postal code</p>
                                    <input value={staller.postalCode} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <p>Email</p>
                                    <input value={staller.email} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className='mt-4 d-flex justify-content-between'>
                                    <Link to={`/editProfile/${staller._id}`}>
                                        <button type='submit' className='btn btn-success'>Edit profile</button>
                                    </Link>
                                    <button className='btn btn-danger' onClick={(d) => handleDelete(staller._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
