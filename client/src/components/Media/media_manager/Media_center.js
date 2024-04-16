import React from "react";
import { Link } from "react-router-dom";
import "../styles/MCenter.css";

export default function MediaCenter() {
  return (
    <div>
      {/* Background image */}
      <div className="overlay">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text">
          <h1 className="img_ga">MEDIA CENTER</h1>
        </div>
      </div>

      <div className="overlay2">
        <div className="overlay2-text">
          <p className="ph">
            In an effort to best serve the needs of the media, Hip Hop
            International has established the following criteria regarding
            coverage of the IDA BORN TO BATTLE Championship, World Hip Hop Dance
            Championship, World Battles and World Moves Dance Workshops. If you
            are requesting to cover these events, please take time to read IDL’s
            VIDEO POLICY and complete the MEDIA CREDENTIAL REQUEST FORM.
          </p>
          <p className="ph">
            If you are media with special requests or would like to be added to
            IDL's database to receive the latest information, please email
            borntobattle@gmail.com.
          </p>
        </div>
      </div>

      <div className="overlay3">
        <ul>
          <li className="hh2">
            <Link to="/gallery">POLICY</Link>
          </li>
          <li className="hh21">
            <Link to="/requestForm">MEDIA CREDENTIAL FORM</Link>
          </li>
        </ul>
      </div>

      <div className="overlay4">
        <div className="butt">
          <button className="custom-button">
            <Link to="/mediaM">STAY POSTED ON EVERYTHING| SIGN UP</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
