import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Styles/EditStallStyles.css'; // Import your CSS file
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

export default function ItemShow() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const goToEditItem = (Itemid) => {
    navigate(`/edititem/${Itemid}`);
  };

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

  function deleteItem(Itemid) {
    axios.delete(`http://localhost:4000/staller/items/delete/${Itemid}`)
        .then(() => {
            alert("Item Deleted.")
            navigate('/stalls')
            
        })
        .catch((err) => {
            alert("couldn't delete the item.", err)
        })
}

  return (
    <div className='fullDiv rounded-4'>
      <h2>Items</h2>

      <div className='container'>
        <div className='row'>
          {items.map((item) => (
            <div className='col-md-6' key={item._id}>
              <div className='d-flex flex-column' style={{ position: 'relative' }}> {/* New container */}
                <div className='d-flex flex-column gap-2' style={{ position: 'absolute', top: '0px', right: '15px', zIndex: 2 }}> {/* Button container */}
                  <button className='btn rounded-circle border border-4 edit-delete-btn' onClick={() => goToEditItem(item._id)}>
                    <MdEdit />
                  </button>
                  <button className='btn rounded-circle border border-4 edit-delete-btn' onClick={(d) => deleteItem(item._id)}>
                    <MdDelete />
                  </button>
                </div>
                <div className='bg-white mb-5' style={{ marginInline: '70px' }}> {/* Card container */}
                  <div className='card'>
                    <div className='card-block'>
                      <h3 className='card-title bg-dark text-white' >{item.pName}</h3>
                    </div>
                    <div>
                      {item.pImage &&
                        <img
                          src={`http://localhost:4000/staller/items/uploads/${item.pImage}`}
                          alt="Product Image"
                          style={{ maxWidth: '300px', height: '300px', alignSelf: 'center' }}
                        />}
                    </div>
                    <div className='card-block'>
                      <p className='card-text bg-dark text-white'>{item.pPrice}</p>
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
}