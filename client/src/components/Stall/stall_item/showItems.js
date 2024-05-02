import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../Style/stallStyles/EditStallStyles.css';
import { useNavigate } from 'react-router-dom';

export default function ItemShow() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");



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


  return (
    <div className='fullDiv rounded-4'>
      <h2>Items</h2>
      <form>
        <input className='form-control' placeholder='Search items...' onChange={(e) => { setSearch(e.target.value) }} />
      </form>

      <div className='container'>
        <div className='row'>
          {items.filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.pName.toLowerCase().includes(search);
          }).map((item) => (
            item && ( // Check if item is not null
              <div className='col-md-6' key={item._id}>
                <div className='d-flex flex-column' style={{ position: 'relative' }}>
                  <div className='d-flex flex-column gap-2' style={{ position: 'absolute', top: '0px', right: '15px', zIndex: 2 }}> {/* Button container */}
                    <button className='btn rounded-circle border border-4 edit-delete-btn' onClick={() => goToEditItem(item._id)}>
                      edit
                    </button>
                    <button className='btn rounded-circle border border-4 edit-delete-btn' onClick={(d) => deleteItem(item._id)}>
                      delete
                    </button>
                  </div>
                  <div className='bg-white mb-5' style={{ marginInline: '70px' }}>
                    <div className='card'>
                      <div className='card-block'>
                        <h3 className='card-title bg-dark text-white' >{item.pName}</h3>
                      </div>
                      <div>
                        {item.pImage && (
                          <img
                            src={`http://localhost:8020/staller/items/uploads/stallItems/${item.pImage}`}
                            alt="Product Image"
                            style={{ maxWidth: '300px', height: '300px', alignSelf: 'center' }}
                          />)}
                      </div>
                      <div className='card-block'>
                        <p className='card-text bg-dark text-white'>{item.pPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
