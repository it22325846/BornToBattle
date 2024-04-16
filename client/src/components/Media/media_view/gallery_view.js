import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/main.css";
import "../styles/gallery.css";
export default function Gallery() {
  const navigate = useNavigate();


  const [media, setMedia] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);


  // Fetch media on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8020/media/read")
      .then((res) => {
        setMedia(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error fetching media.");
      });
  }, []);

  return (
    <div>
      {/* Background image */}
      <div className="overlay">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text">
          <h1 className="img_ga">IMAGE GALLERY</h1>
        </div>
      </div>
    
      
      {/* Display fetched media */}
      <div className="media">
        {media.map((item) => (
          <div key={item._id} className="media-item">
            {/* Check if image exists before rendering */}
            {item.image && (
              <img
                src={`http://localhost:8020/media/uploads/${item.image}`}
                alt="Product Image"
                className="media-image"
              />
            )}
            
            <div className="media-content">
              <h3 className="imagename">{item.name}</h3>
              <p className="imagedescription">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
