import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JudgeCount = () => {
  const [jcount, setJcount] = useState(0);
  const [bcount, setBcount] = useState(0);

  let dancingJudges = 4;
  let beatboxJudges = 2;

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
        setBcount(res.data.bcount);
      }
    }).catch((error) => {
      console.error('Error fetching count:', error);
    });
  }, []);

  return (
    <div>
      <button className="btn btn-success">
        <a href="/addjudge" style={{ color: 'black', textDecoration: 'none' }}>Add Judges</a>
      </button> 

      <h3 style={{ marginTop: '20px', fontSize: '18px' }}>
        Add {dancingJudges - jcount} judges for dancing event
      </h3>

      <h3 style={{ fontSize: '18px' }}>
        Add {beatboxJudges - bcount} judges for beatbox event
      </h3>
    </div>
  );
}

export default JudgeCount;
