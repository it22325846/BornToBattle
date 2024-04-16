import React from "react";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <ul className="nav justify-content-end">
      <div
        className="image_nav"
        style={{ marginRight: "auto", marginLeft: "10px" }}
      >
        <a href="home">
          <img src="../../Images/ids.png" alt="IDS" width="60" height="40" />
        </a>
      </div>

      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">
          HOME
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="displayevents">
          EVENTS
        </a>
      </li>

      <span className="separator">|</span>

<li className="nav-item">
  <a className="nav-link" href="judges">
    JUDGES
  </a>
</li>

<span className="separator">|</span>

<li className="nav-item">
  <a className="nav-link" href="candidates">
    CONTESTANTS
  </a>
</li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="rules">
          RULES
        </a>
      </li>

     

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="shops">
          SHOPS
        </a>
      </li>

      <span className="separator">|</span>

      <div class="dropdown">
        <a
          className="nav-link active"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          
        >
          MEDIA
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li>
            <a
              class="dropdown-item active"
              onClick={() => navigate("/galleryDisplay")}
            >
              Gallery
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="https://www.youtube.com/@invincibledancestudio-ids6066">
              Videos
            </a>
          </li>
          <li>
            <a class="dropdown-item" onClick={() => navigate("/mediaCenter")}>
              Media Center
            </a>
          </li>
        </ul>
      </div>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="about">
          ABOUT US
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="contactus">
          CONTACT US
        </a>
      </li>
      <div className="image_nav2" style={{ marginRight: "10px" }}>
        <a href="#don't add profile link">
          <img
            src="../../Images/profile.png"
            alt="IDS"
            width="40"
            height="40"
          />
        </a>
      </div>
    </ul>
  );
}
export default Header;
