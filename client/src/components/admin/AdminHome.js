import React, { useEffect } from "react";

const AdminHome = () => {
  // useEffect(() => {
  //   const admin = localStorage.getItem('username');
  //   if (admin !== 'admin') {
  //     alert("You are not admin");
  //     window.location.href = '/home';
  //   }
  // }, []);

  const handleSignOut = () => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <div>
      <style>{"body { background-color: #A2A2A2; }"}</style>
      {/* <h><a href="/admincandidates/dancing">Dancing</a></h><br></br>
      <h><a href="/admincandidates/rap">Rap</a></h><br></br>
      <h><a href="/admincandidates/beatbox">BeatBox</a></h> */}

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/e" style={{ color: "black" }}>
          Event Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/regDash" style={{ color: "black" }}>
          Registration Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="#" style={{ color: "black" }}>
         Payment Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="#" style={{ color: "black" }}>
          Result Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/M_Comment_main" style={{ color: "black" }}>
         Audience  Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="#" style={{ color: "black" }}>
         Stall Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="#" style={{ color: "black" }}>
         Media Management
        </a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="#" style={{ color: "black" }}>
         Sponsor Management
        </a>
      </button>

      <br></br>
      <br></br>


      <br></br>
      <br></br>



      {/* <button className="btn btn-success">
        <a href="/Adminsignup" style={{ color: "black" }}>
          Sign up
        </a>
      </button> */}

      <br></br>
      <br></br>

      <div>
        <button className="btn btn-danger" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default AdminHome;
