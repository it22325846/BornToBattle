import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
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
        <div>
            <div  className='fullDiv rounded-4 mt-5 mb-5' style={{ borderRadius: '30px', marginInline: '5in', display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h3>Want to create your own stall?</h3>
                    <button className='btn btn-success mt-2 px-4 py-1' style={{marginLeft: '1.2in', fontSize: '25px'}} onClick={ (g) => {navigate('/createStaller')}}>Create</button>
                </div>
            </div>
            <div className='fullDiv rounded-4 mt-5 mb-5' style={{ borderRadius: '30px', marginInline: '100px' }}>
                <h1 className='header my-3' style={{ marginLeft: '6.2in' }}>Items</h1>

                <form>
                    <div className='row' style={{ marginLeft: '2cm' }}>
                        <input className='form-control' style={{ width: '11.9in' }} placeholder='Search items...' onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                </form>


                <div className='container rounded-4 p-4 mb-4' style={{ opacity: '75%', backgroundImage: 'url("../../../Images/red_and_black.jpg")', backgroundSize: 'cover', borderRadius: '20px' }}>
                    <div ref={componentPDF} style={{ width: '100%' }}>
                        <div className='row' >
                            {items.filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.pName.toLowerCase().includes(search);
                            }).map((item) => (
                                <div className='col-md-6' key={item._id}>
                                    <div className='d-flex flex-column' style={{ position: 'relative' }}>
                                        <div className='bg-white ' style={{ marginInline: '70px', borderRadius: '50px' }}>
                                            <div className='card bg-white' style={{ borderRadius: '25px' }}>
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
        </div>
    );
};
