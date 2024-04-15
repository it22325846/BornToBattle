import React from "react";
import "./styles/mediaM.css"

export default function mediaManagerUI() {
  return (
    <div>
      {/* Background image */}
      <div className="overlay">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text">
          <h1 className="img_ga">MEDIA MANAGER</h1>
        </div>
        
        {/* Centered links */}
        <div className="link-container">
          <a href="/gallery" className="link">ADD GALLERY</a>
          <a href="#" className="link">Link 2</a>
          <a href="/reqForm" className="link">REQUEST FORMS</a>
        </div>
      </div>
    </div>
  );
}
