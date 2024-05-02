import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import '../../Style/stallStyles/EditStallStyles.css';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

export default function UserStalls() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const componentPDF = useRef();

    useEffect(() => {
        function readItems() {
            axios.post("http://localhost:8020/staller/items/read")
                .then((res) => {
                    setItems(res.data);
                    console.log(res.data)
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        readItems();
    }, []);

    const handlePrint = (event) => {
        event.preventDefault();
        generatePDF();
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "StallItemData"
    });


    return (
        <div className='fullDiv rounded-4'>
            <h3 className='header my-3'>IDS Sri Lanka</h3>

            <form>
                <input className='form-control' placeholder='Search items...' onChange={(e) => { setSearch(e.target.value) }} />
                <button className='btn btn-success' onClick={handlePrint}>PDF</button>
            </form>


            <div className='container rounded'>
                <div ref={componentPDF} style={{ width: '100%' }}>
                    <div className='row' >
                        {items.filter((item) => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.pName.toLowerCase().includes(search);
                        }).map((item) => (
                            <div className='col-md-6' key={item._id}>
                                <div className='d-flex flex-column' style={{ position: 'relative' }}>
                                    <div className='bg-white' style={{ marginInline: '70px' }}>
                                        <div className='card bg-white rounded-0'>
                                            <div className='card-block'>
                                                {item.pImage &&
                                                    <img
                                                        src={`http://localhost:8020/staller/items/uploads/stallItems/${item.pImage}`}
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
        </div>
    );
};
