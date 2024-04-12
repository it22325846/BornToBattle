const regDash =()=>{
    const handleSignOut = () => {
        localStorage.removeItem('username');
        window.location.href = '/';
      };
    
      return (
        <div>
          <style>{'body { background-color: #A2A2A2; }'}</style>
          <h><a href="/managercandidates/dancing">Dancing</a></h><br></br>
          <h><a href="/managercandidates/rap">Rap</a></h><br></br>
          <h><a href="/managercandidates/beatbox">BeatBox</a></h>
    
          
    
          <br></br>
          <br></br>
    
          <button className="btn btn-success">
            <a href="/editcandidates" style={{ color: 'black' }}>All Candidates</a>
          </button>
    
          <br></br>
          <br></br>
    
          <button className="btn btn-success">
            <a href="/editJudges" style={{ color: 'black' }}>All Judges</a>
          </button>
    
        
    
          
    
            
          <br></br>
          <br></br>
    
          <button className="btn btn-success">
              <a href="/judgeCount" style={{ color: 'black' }}>Add Judges</a>
            </button>
{/*     
            <br></br>
          <br></br>
    
          <button className="btn btn-success">
              <a href="#" style={{ color: 'black' }}>Add Event</a>
            </button> */}
    
            
          <br></br>
          <br></br>
    
         
    
          {/* <button className="btn btn-success">
            <a href="/Adminsignup" style={{ color: 'black' }}>Sign up</a>
          </button>
    
          <br></br>
          <br></br> */}
    
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
export default regDash;