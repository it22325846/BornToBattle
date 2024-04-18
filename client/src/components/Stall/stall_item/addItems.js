import React, { useState } from "react";
import '../../Style/stallStyles/EditStallStyles.css';
import axios from "axios";

export default function ItemAdd() {

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

    }

    return (
        <div>
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
