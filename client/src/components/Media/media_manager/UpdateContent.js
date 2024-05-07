import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/updateContent.css";


const UpdateContent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateContent = () => {
    if (!name.trim() || !description.trim()) {
      alert("Please enter both name and description.");
      return;
    }

    setLoading(true);

    axios
      .put(`http://localhost:8020/gallery/update/${id}`, {
        name,
        description,
      })
      .then(() => {
        alert("Item updated successfully.");
        navigate("/gallery"); // Navigate back to the main page
      })
      .catch((err) => {
        console.error(err.message);
        alert("Error updating media. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
        <div className="container1">
        <h2>Update Content</h2>
      <div>
        <label htmlFor="name">Picture Caption:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="button1" onClick={updateContent} disabled={loading}>
        {loading ? "Updating..." : "Update"}
      </button>
        </div>
      
    </div>
  );
};

export default UpdateContent;
