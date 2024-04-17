import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ItemEdit() {

    const { Itemid } = useParams();
    console.log("Item id :", Itemid);

    const navigate = useNavigate();

    const [pName, setUpdatePname] = useState('');
    const [pPrice, setUpdatePprice] = useState(0);
    const [pImage, setUpdatePimage] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/staller/items/get/${Itemid}`).then((res) => {

            console.log(res);

            setUpdatePname(res.data.pName);
            setUpdatePprice(res.data.pPrice);
            setUpdatePimage(res.data.pImage);

        }).catch((err) => {
            alert("item update wen na", err);
        });
    }, [Itemid])


    const editItem = (t) => {
        t.preventDefault();

        const updateItem = {
            pName,
            pPrice,
            pImage,
        }

        axios.put(`http://localhost:4000/staller/update/${Itemid}`, updateItem)
            .then(result => {
                console.log(result);
                alert("Item updated successfully.");
                navigate('/stalls');
            })
            .catch((err) => {
                console.error("Error updating item:", err);
                alert("Failed to update item. Check console for details.");
            });

        console.log("Update Payload:", updateItem);
    };

    return (
        <div>
            <h2>nnnnn</h2>
            <div className="fullDiv rounded-4">

                <div className="p-4">
                    <form className="row g-3 text-start" onSubmit={editItem}>
                        <div className="col-md-8">
                            <label htmlFor="pName" className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pName"
                                value={pName}
                                onChange={(u) => {
                                    console.log(u.target.value)
                                    setUpdatePname(u.target.value)
                                }}

                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="pPrice" className="form-label">Product Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="pPrice"
                                value={pPrice}
                                onChange={(u) => {
                                    console.log(u.target.value)
                                    setUpdatePprice(u.target.value)
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
                                    console.log(u.target.files[0].name)
                                    setUpdatePimage(u.target.files[0])
                                }}
                            />
                            {pImage && <p>Selected File: {pImage.name}</p>}
                        </div>
                        <div className="mb-2 mt-4">
                            <button type="submit" className="btn btn-primary" >Add to List</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
