import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function StallerProfile() {
    const [stallers, setStallers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        function readStallers() {
            axios.post("http://localhost:8020/staller/read")
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
        axios.delete(`http://localhost:8020/staller/delete/${Stallerid}`)
            .then(() => {
                alert("Staller Deleted.")
                navigate('/')
            })
            .catch((err) => {
                alert("couldn't delete the staller.", err)
            })
    }


    return (
        <div className='container mt-5 mb-5' style={{backgroundImage: 'url("../../../Images/red_and_black.jpg")', backgroundSize: 'cover', borderRadius: '20px'}}>
            <div className="row col-sm-12 rounded-3 bg-opacity-25 no-gutters">
                <div className="col-sm-5 user-profile my-auto">
                    <div className="card-block text-center text-white">
                        <div className="my-auto pb-1 rounded-3">
                            <img
                                src="../../../Images/dancer.png"
                                className="img mr-5"
                                alt="User-Profile-Image"
                            />
                        </div>
                    </div>
                </div>
                {stallers.map((staller) => (
                    <div className="col-sm-7 p-3 mt-3">
                        <div className="profdata card-block rounded-3 text-warning">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Sri lankan Business Number</label>
                                    <input value={staller.sbn} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6    ">
                                    <label style={{textAlign: 'start'}}>Company Name</label>
                                    <input value={staller.companyName} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>First Name</label>
                                    <input value={staller.firstName} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Last Name</label>
                                    <input value={staller.lastName} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Mobile</label>
                                    <input value={staller.mobile} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Address</label>
                                    <input value={staller.address} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>City</label>
                                    <input value={staller.city} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Province</label>
                                    <input value={staller.province} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Postal code</label>
                                    <input value={staller.postalCode} className='form-control' disabled />
                                </div>
                                <div className="col-sm-6">
                                    <label style={{textAlign: 'start'}}>Email</label>
                                    <input value={staller.email} className='form-control' disabled />
                                </div>
                            </div>
                            <div className="row ml-3">
                                <div className='btns mt-2' style={{display: "flex", justifyContent:"space-between", width:"100vh"}}>
                                    <Link to={`/editStaller/${staller._id}`}>
                                        <button type='submit' className='btn btn-success'>Edit profile</button>
                                    </Link>
                                    <button className='del btn btn-danger mr-3' onClick={(d) => handleDelete(staller._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
