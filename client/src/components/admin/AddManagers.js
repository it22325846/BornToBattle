import React, { Component } from 'react'

export default class AddManagers extends Component {
  render() {
    return (
      <div>
   
      <button className="btn btn-success">
        <a href="/editcandidates" style={{ color: 'black' }}>All Candidates</a>
      </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/judges" style={{ color: 'black' }}>All Judges</a>
      </button>

    

      

        
      <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="/addJudge" style={{ color: 'black' }}>Add Judges</a>
        </button>

        <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add Event</a>
        </button>

        
      <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add Managers</a>
        </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/Adminsignup" style={{ color: 'black' }}>Sign up</a>
      </button>

      <br></br>
      <br></br>

      {/* <div>
        <button className="btn btn-danger" onClick={handleSignOut}>
          Sign Out
        </button>
      </div> */}

      <br></br>
      <br></br>
    </div>
    )
  }
}
