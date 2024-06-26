import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import '../../Style/stallStyles/EditStallStyles.css';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

export default function ItemShow() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const componentPDF = useRef();


  const goToEditItem = (Itemid) => {
    navigate(`/editItems/${Itemid}`);
  };

  useEffect(() => {
    function readItems() {
      axios.post("http://localhost:8020/staller/items/read")
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    readItems();
  }, []);

  function deleteItem(Itemid) {
    axios.delete(`http://localhost:8020/staller/items/delete/${Itemid}`)
      .then(() => {
        alert("Item Deleted.")
        navigate('/theStall')

      })
      .catch((err) => {
        alert("couldn't delete the item.", err)
      })
  }




  const handlePrint = (event) => {
    event.preventDefault();
    generatePDF();
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "StallItemData"
  });

  return (
    <div className='fullDiv rounded-4 mt-5 mb-5' style={{ borderRadius: '30px', marginInline: '100px' }}>
      <h1 className='header my-3' style={{ marginLeft: '6.2in' }}>Items</h1>

      <form>
        <div className='row' style={{ marginLeft: '2cm' }}>
          <input className='form-control' style={{ width: '10.3in' }} placeholder='Search items...' onChange={(e) => { setSearch(e.target.value) }} />
          <button className='btn btn-success' style={{ marginLeft: '20px', marginTop: '-10px' }} onClick={handlePrint}>Download PDF</button>
        </div>
      </form>


      <div className='rounded-4 p-4' style={{marginLeft: '0.8in',width: '11.8in',opacity: '75%',backgroundImage: 'url("../../../Images/red_and_black.jpg")', backgroundSize: 'cover', borderRadius: '20px'}}>
        <div ref={componentPDF} style={{ width: '100%' }}>
          <div className='row' >
            {items.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.pName.toLowerCase().includes(search);
            }).map((item) => (
              <div className='col-md-6' key={item._id}>
                <div className='d-flex flex-column' style={{ position: 'relative' }}>
                  <div className='d-flex flex-column gap-2 mt-1' style={{ position: 'absolute', top: '0px', right: '15px', zIndex: 2 }}> {/* Button container */}
                    <button className='btn btn-success text-warning' onClick={() => goToEditItem(item._id)}>
                      edit
                    </button>
                    <button className='btn btn-warning text-danger mt-1' onClick={(d) => deleteItem(item._id)}>
                      delete
                    </button>
                  </div>
                  <div className='bg-white ' style={{ marginInline: '90px', borderRadius: '50px' }}>
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
                        <h3 className='card-text text-white rounded-4 px-4' style={{ display: 'inline-block', backgroundColor: '#ff0000' }}>Rs.{item.pPrice}.00</h3>
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
}



