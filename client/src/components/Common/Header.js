import React from "react";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const userType=localStorage.getItem('userType');

  console.log("Type is",userType)

  const handleProfileClick = () => {
    switch (userType) {
      case "candidate":
        navigate("/cprofile"); // Redirect to candidate.js
        break;
        case "group":
          navigate("/groupprofile"); // newly addedddddd
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
      <NavLink className="nav-link" activeClassName="active" to="/">
  HOME
</NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/displayevents">
          EVENTS
        </NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/all_judges">
          JUDGES
        </NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/candidates">
        CONTESTANTS
      </NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/Rules">
          RULES
        </NavLink>
      </li>

     

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/createStaller">
          SHOPS
        </NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/Sponsordashboard">
          SPONSORS
        </NavLink>
      </li>

      <span className="separator">|</span>

      <div class="dropdown">
        <a
          className="nav-link"
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
      <NavLink className="nav-link" activeClassName="active" to="/Aboutus">
          ABOUT US
        </NavLink>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="Comment_main">
          COMMENTS & FEEDBACK
        </NavLink>
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