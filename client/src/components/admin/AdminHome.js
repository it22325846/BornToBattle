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
    <div style={{ marginLeft:'50px' }}>
      <style>{"body { background-color: #A2A2A2; }"}</style>
      {/* <h><a href="/admincandidates/dancing">Dancing</a></h><br></br>
      <h><a href="/admincandidates/rap">Rap</a></h><br></br>
      <h><a href="/admincandidates/beatbox">BeatBox</a></h> */}

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/e"}
        style={{ color: "black" }}>
          Event Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/regDash"}
        style={{ color: "black" }}>
          Registration Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/#"}
        style={{ color: "black" }}>
          Payment Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/#"}
        style={{ color: "black" }}>
          Result Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/Manager_Audience"}
        style={{ color: "black" }}>
          Audience  Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/#"}
        style={{ color: "black" }}>
          Stall Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/#"}
        style={{ color: "black" }}>
          Media Management
        
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success" onClick={() => window.location.href = "/#"}
        style={{ color: "black" }}>
          Sponsor Management
        
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
