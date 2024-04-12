import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JudgeCount =()=>{

const [jcount, setJcount]=useState(0);
const [bcount, setBcount]=useState(0);

let dancingJudges=4;
let beatboxJudges=2;

useEffect(() => {     
    axios.get(`/judges/count/dancing`).then((res) => {
        if (res.data.success) {
            setJcount(res.data.jcount);
        }
    }).catch((error) => {
        console.error('Error fetching count:', error);
    });

    axios.get(`/judges/count/beatbox`).then((res) => {
        if (res.data.success) {
            setBcount(res.data.bcount); // Corrected to set bcount
        }
    }).catch((error) => {
        console.error('Error fetching count:', error);
    });
}, []);



  return (
    <div>
          <button className="btn btn-success">
              <a href="/addjudge" style={{ color: 'black' }}>Add Judges</a>
            </button> Add {dancingJudges-jcount} judges for dancing event
<br></br>
<br></br>
            Add {beatboxJudges-bcount} judges for beatbox event

       
     
    </div>
  );





}

export default JudgeCount;
