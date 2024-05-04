import React from "react";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const userType=localStorage.getItem('userType');

  console.log("Type is",userType)

  const handleProfileClick = () => {
    switch (userType) {
      case "candidate":
        navigate("/cprofile"); // Redirect to candidate.js
        break;
      case "judge":
        navigate("/judgeprofile"); // Redirect to judge.js
        break;
      
        case "audience":
          navigate("/A_profile"); // Redirect to audience profiles
          break;

        case "sponsor":
           navigate("/#"); // Redirect to judge.js
          break;

        case "stall_owner":
            navigate("/#"); // Redirect to judge.js
          break;
      default:
        // Handle other user types or invalid user type
        console.error("Invalid user type:", userType);
    }
  };

  return (
    <ul className="nav justify-content-end">
      <div
        className="image_nav"
        style={{ marginRight: "auto", marginLeft: "10px" }}
      >
        <a href="/">
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
        <a className="nav-link" href="all_judges">
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
        <a className="nav-link" href="/Rules">
          RULES
        </a>
      </li>

     

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="/createStaller">
          SHOPS
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="/Sponsordashboard">
          SPONSORS
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
        <a className="nav-link" href="/Aboutus">
          ABOUT US
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="Comment_main">
          CONTACT US
        </a>
      </li>
      {userType && (
        <div className="image_nav2" style={{ marginRight: "10px" }}>
          <a href="#" onClick={handleProfileClick}>
            <img
              src="../../Images/profile.png"
              alt="IDS"
              width="40"
              height="40"
            />
          </a>
        </div>
      )}
    </ul>
  );
}
export default Header;