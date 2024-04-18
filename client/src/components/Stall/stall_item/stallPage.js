import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../Style/stallStyles/EditStallStyles.css';
import { useNavigate } from 'react-router-dom';

export default function UserStalls() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        function readItems() {
            axios.post("http://localhost:4000/staller/items/read")
                .then((res) => {
                    setItems(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        readItems();
    }, []);
    return (
        <div className='fullDiv rounded-4'>
            <h3 className='header my-3'>IDS Sri Lanka</h3>

            <div className='container rounded'>
                <div className='row' >
                    {items.map((item) => (
                        <div className='col-md-6' key={item._id}>
                            <div className='d-flex flex-column' style={{ position: 'relative' }}>
                                <div className='bg-white' style={{ marginInline: '70px' }}>
                                    <div className='card bg-white rounded-0'>
                                        <div className='card-block'>
                                            {item.pImage &&
                                                <img
                                                    src={`http://localhost:4000/staller/items/uploads/${item.pImage}`}
                                                    alt="Product Image"
                                                    style={{ maxWidth: '300px', height: '300px', alignSelf: 'center' }}
                                                />}
                                        </div>
                                        <div className='card-block'>
                                            <h3 className='card-text bg-white text-dark rounded-bottom' >{item.pName}</h3>
                                        </div>
                                        <div className='card-block my-3'>
                                            <h3 className='card-text text-white rounded-4 px-4' style={{ display: 'inline-block', backgroundColor: '#ff0000' }}>Rs.{item.pPrice}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
