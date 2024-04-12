import React from 'react';

const EventManagerDashboard = () => {
  const handleSignOut = () => {
    // Handle sign out logic
  };

  return (
    <div>
      {/* <style>{'body { background-color: #A2A2A2; }'}</style> */}
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="/candidates/dancing">
            <img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" />
          </a>
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="/candidates/rap">
            <img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" />
          </a>
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center">
          <a href="/candidates/dancing">
            <img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" />
          </a>
        </div>

       
      </div>

      <div className='row'>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p><a href="/candidates/dancing">All Candidates In Dancing</a></p><br />
        </div>

        <div className="col-4 d-flex justify-content-center align-items-center">
          <p><a href="/candidates/rap">All Candidates In Rap</a></p><br />
        </div>

      </div>

      <br />
{/* 
      <button className="btn btn-success">
        <a href="/signup" style={{ color: 'black' }}>Apply</a>
      </button>

      <br /><br />

      <button className="btn btn-success">
        <a href="/candidates" style={{ color: 'black' }}>All Candidates</a>
      </button>

      <br /><br />

      <button className="btn btn-success">
        <a href="/signup" style={{ color: 'black' }}>Sign up</a>
      </button>

      <br /><br /> */}

      <div>
        <button className="btn btn-danger" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <br /><br />

      <button className="btn btn-success">
        <a href="/signin" style={{ color: 'black' }}>Sign In</a>
      </button>
    </div>
  );
};

export default EventManagerDashboard;
