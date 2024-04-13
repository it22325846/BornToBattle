import React, { useState } from "react";
import { FaLink, FaPlus } from "react-icons/fa";
import './Styles/EditStallStyles.css';
import axios from "axios";
import { Link } from "react-router-dom";

export default function EditStall() {


    // State variables to store form data
    const [pName, setPname] = useState('');
    const [pPrice, setPprice] = useState(0);
    const [pImage, setPimage] = useState();

    const addItem = (u) => {
        u.preventDefault();

        const formData = new FormData();
        formData.append("pName", pName);
        formData.append("pPrice", pPrice);
        formData.append("pImage", pImage);

        axios.post("http://localhost:4000/staller/items/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(() => {
            alert("Item added.");
        }).catch((err) => {
            alert(err);
        });

    }/*



    let [message, setMessage] = useState('No items');
    let [createBtn, setCreateBtn] = useState(
        <div className="mt-3">
            <button type="button" className="btn btn-primary btn-lg" onClick={e => changeMsg()}>Create New <FaPlus className="mb-1" /></button>
        </div>);
    let [addItems, setAddItems] = useState('');
    //form load after create new button clicked
    function changeMsg() {
        setMessage(message = '');
        setCreateBtn(createBtn = '');
        setAddItems(addItems =
            <form className="row g-3 text-start" onSubmit={addItem} action="/create" method="post" encType="multipart/form-data">
                <div className="col-md-8">
                    <label htmlFor="pName" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pName"
                        onChange={(u) => {
                            console.log(u.target.value)
                            setPname(u.target.value)
                        }}

                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="pPrice" className="form-label">Product Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="pPrice"
                        onChange={(u) => {
                            console.log(u.target.value)
                            setPprice(u.target.value)
                        }}

                    />
                </div>
                <div className="col-12">
                    <label htmlFor="pImage" className="form-label">Product Image</label>
                    <input
                        type="file"
                        name="pImage"
                        className="form-control"
                        id="pImage"
                        onChange={(u) => {
                            console.log(u.target.files[0])
                            setPimage(u.target.files[0])
                        }} // Use files[0] to get the file object
                    />
                </div>
                <div className="mb-2 mt-4">
                    <button type="submit" className="btn btn-primary" >Add to List</button>
                </div>
            </form>)
    }




    let [pendingMsg, setPendingMsg] = useState('')
    //pending tab after the add list clicked
    function pending() {
        setPendingMsg(pendingMsg =
            <div className="bg-white p-5 rounded-3" id="pendingID">
                <h3>Item is pending...</h3>
                <p>Item will be showed in here after it approved.</p>
            </div>)
        setAddItems(addItems = '')

    }




    /*let [newItem, setNewItem] = useState('');
    //the form should be load after add new button clicked
    function crNewItem() {
        setNewItem(newItem =
            <div className="mt-3 text-end">
                <button type="button" className="btn btn-primary">Add New <FaPlus className="mb-1" /></button>
            </div>)
    }*/


    return (
        <div>{/* 
           <div className="fullDiv rounded-4">
                <div>
                    <h2 className="pt-3" style={{ color: '#05242a' }}>{message}</h2>
                </div>

                <div className="p-4">
                    <div>{createBtn}</div>
                    <div>{addItems}</div>
                    {/*<div>{newItem}</div>
                    <div>{pendingMsg}</div>
                </div>
            </div>*/}



            <div>
                <div className="fullDiv rounded-4">

                    <div className="p-4">
                        <form className="row g-3 text-start" onSubmit={addItem}>
                            <div className="col-md-8">
                                <label htmlFor="pName" className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pName"
                                    onChange={(u) => {
                                        console.log(u.target.value)
                                        setPname(u.target.value)
                                    }}

                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="pPrice" className="form-label">Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="pPrice"
                                    onChange={(u) => {
                                        console.log(u.target.value)
                                        setPprice(u.target.value)
                                    }}

                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="pImage" className="form-label">Product Image</label>
                                <input
                                    type="file"
                                    name="pImage"
                                    className="form-control"
                                    id="pImage"
                                    onChange={(u) => {
                                        console.log(u.target.files[0])
                                        setPimage(u.target.files[0])
                                    }} // Use files[0] to get the file object
                                />
                            </div>
                            <div className="mb-2 mt-4">
                                <button type="submit" className="btn btn-primary" >Add to List</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
