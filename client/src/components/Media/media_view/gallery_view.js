import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/main.css";
import "../styles/gallery.css";
export default function Gallery() {
  const navigate = useNavigate();


  const [media, setMedia] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  // Fetch media on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8020/gallery/read")
      .then((res) => {
        setMedia(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error fetching media.");
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMedia = media.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  

  return (
    <div>
      {/* Background image */}
      <div className="overlay111">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text111">
          <h1 className="img_ga111">IMAGE GALLERY</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar111">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    
      
      {/* Display fetched media */}
      <div className="media111">
        {filteredMedia.map((item) => (
          <div key={item._id} className="media-item111">
            {/* Check if image exists before rendering */}
            {item.image && (
              <img
                src={`http://localhost:8020/gallery/uploads/media/${item.image}`}
                alt="Product Image"
                className="media-image111"
              />
            )}
            <div className="media-content111">
              <h3 className="imagename111">{item.name}</h3>
              <p className="imagedescription111">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
