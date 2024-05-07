import React from "react";
import { Link } from "react-router-dom";
import "../styles/MCenter.css";

export default function MediaCenter() {
  return (
    <div>
      {/* Background image */}
      <div className="overlay111">
        <img src="../../Images/iimg.jpg" alt="IDS" />
        <div className="overlay-text111">
          <h1 className="img_ga111">MEDIA CENTER</h1>
        </div>
      </div>

      <div className="overlay222">
        <div className="overlay-text222">
          <p className="ph22">
            In an effort to best serve the needs of the media, Hip Hop
            International has established the following criteria regarding
            coverage of the IDA BORN TO BATTLE Championship, World Hip Hop Dance
            Championship, World Battles and World Moves Dance Workshops. If you
            are requesting to cover these events, please take time to read IDL’s
            VIDEO POLICY and complete the MEDIA CREDENTIAL REQUEST FORM.
          </p>
          <p className="ph22">
            If you are media with special requests or would like to be added to
            IDL's database to receive the latest information, please email
            borntobattle@gmail.com.
          </p>
        </div>
      </div>

      <div className="overlay333">
        <ul>
          <li className="hh22">
            <Link to="/policy">POLICY</Link>
          </li>
          <li className="hh211">
            <Link to="/requestForm">MEDIA CREDENTIAL FORM</Link>
          </li>
        </ul>
      </div>

      <div className="overlay444">
        <div className="butt44">
          <button className="custom-button44" onClick={() => window.location.href = "/mediaM"}>
            <Link to="/mediaM">STAY POSTED ON EVERYTHING| SIGN UP</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
