import React, { useState, useEffect } from "react";
// import '../Style/venath_reg/candidate.css';


const Candidates = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  ); // Retrieve username from localStorage

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const handleSignOut = () => {
    localStorage.removeItem("username");
    setUsername("");
    alert("Signed Out");
    window.location.href = "/";
  };

  const handleSignIn = () => {
    localStorage.removeItem("username");
    setUsername("");
    alert("Signed Out");
    window.location.href = "/";
  };

  // handleApply = () => {
  //   const { existingCandidates } = this.props; // Assuming existingCandidates is a prop
  //   const { username } = this.state;
  //   if (!existingCandidates && username) {
  //     // If existingCandidates is null or undefined, perform some action
  //     window.location.href = '/signup';
  //   } else {
  //     // If existingCandidates is not null, perform another action or display a message
  //     alert('Existing candidates found');
  //   }
  // };

  return (
    <div>
      <h3 style={{ color: 'white' }}>Welcome  {username}</h3>
      <div className="row" style={{ backgroundColor: 'white', padding: '35px'}}>
  <div className="col-12 d-flex justify-content-center align-items-center">
    <iframe
      title="YouTube Video"
      width="1920"
      height="615"
      src={`https://www.youtube.com/embed/LUpwdAqMUP4`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
</div>
<br></br>
<br></br>

      {/* <style>{'body { background-color: #A2A2A2; }'}</style> */}
      <div className="row" >
        <div className="col-6 d-flex justify-content-center align-items-center">
          <a href="/candidates/dancing">
            <img
              src="venath_reg/Hiphop.jpg"
              className="img-fluid"
              alt="Models"
              width="400px"
              height="400px"
            />
          </a>
        </div>
{/* 
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="/candidates/rap">
            <img
              src="venath_reg/dance.jpg"
              className="img-fluid"
              alt="Models"
              width="400px"
              height="400px"
            />
          </a>
        </div> */}

        <div className="col-6 d-flex justify-content-center align-items-center">
          <a href="/candidates/beatbox">
            <img
              src="venath_reg/Beatbox.jpg"
              className="img-fluid"
              alt="Models"
              width="400px"
              height="400px"
            />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <h3>
            <a href="/candidates/dancing">All Candidates In Dancing</a>
          </h3>
          <br />
        </div>

        {/* <div className="col-4 d-flex justify-content-center align-items-center">
          <p>
            <a href="/candidates/rap">All Candidates In Rap</a>
          </p>
          <br />
        </div> */}
       

        <div className="col-6 d-flex justify-content-center align-items-center">
          <h3>
            <a href="/candidates/beatbox">All Candidates In BeatBox</a>
          </h3>
        </div>

      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <h3>
          <a href="all_groups">All Groups</a>
        </h3>
      </div>

      {/* <h><a href="/candidates/dancing">Dancing</a></h><br></br>
        <h><a href="/candidates/rap">Rap</a></h><br></br>
        <h><a href="/candidates/beatbox">BeatBox</a></h> */}

      <br></br>

      {/* <button className="btn btn-success">
          <a href="/signup" style={{ color: 'black' }}>Apply</a>
         
        </button> */}
      {/* 
        <br></br>
        <br></br>
        <button className="btn btn-success" >

          <a href="/add" style={{ color: 'black' }} >Applyyyy</a>
        </button>
        */}
      <br></br>
      <br></br>
      <div className="row" >
        <div className="col-12 d-flex justify-content-center align-items-center">
          <a href="/candidates/dancing">
            <img
              src="venath_reg/j.jpg"
              className="img-fluid"
              alt="Models"
              width="850px"
              height="400px"
            />
          </a>
        </div>
        </div>
       < div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h3>
            <a href="/all_judges">All Judges</a>
          </h3>
          <br />
        </div>
        </div>

      <button className="btn btn-success">
        <a href="/all_candidates" style={{ color: "black" }}>
          All Candidates
        </a>
      </button>

      <br></br>
      <br></br>
      {/* <button className="btn btn-success">
        <a href="/all_judges" style={{ color: "black" }}>
          All Judges
        </a>
      </button> */}
      {/* <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add judges</a>
        </button> */}

 

      {/* <button className="btn btn-success">
          <a href="/signup" style={{ color: 'black' }}>Sign up</a>
        </button> */}
      <button className="btn btn-success">
        <a href="/CandidateSignup" style={{ color: "black" }}>
          Register To A Event
        </a>
      </button>

      <br></br>
      <br></br>
      <div>
        <button className="btn btn-danger" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <br></br>
      <br></br>

      {/* <button className="btn btn-success">
        <a href="/signin" style={{ color: "black" }}>
          Sign In
        </a>
      </button> */}

      <br></br>
      <br></br>

      {/* 
        <button className="btn btn-success">
          <a href="/AdminSignin" style={{ color: 'black' }}>Admin Sign In</a>
        </button>

        
        <br></br>
        <br></br>

        <button className="btn btn-success">
          <a href="/#" style={{ color: 'black' }}>Manager Sign In</a>
        </button> */}
    </div>
  );
};

export default Candidates;
