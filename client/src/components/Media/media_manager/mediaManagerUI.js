import React from "react";
import "../styles/mediaM.css"

export default function mediaManagerUI() {
  return (
    <div>
      {/* Background image */}
      <div className="overlay111">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text111">
          <h1 className="img_ga111">MEDIA MANAGER</h1>
        </div>
        
        {/* Centered links */}
        <div className="link-container">
          <a href="/gallery" className="link">ADD GALLERY</a>
          <a href="/displyrequest" className="link">REQUEST FORMS</a>
        </div>
      </div>
    </div>
  );
}
