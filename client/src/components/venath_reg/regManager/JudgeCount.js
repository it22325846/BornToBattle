import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JudgeCount = () => {
  const [jcount, setJcount] = useState(0);
  const [bcount, setBcount] = useState(0);

  const [vjcount, setVJcount] = useState(0);
  const [vbcount, setVBcount] = useState(0);

  let dancingJudges = 4;
  let beatboxJudges = 2;

  useEffect(() => {
    axios.get(`/judges/count/dancing`).then((res) => {
      if (res.data.success) {
        console.log('Received G dancing judges count:', res.data.judgesCounts);

        setJcount(res.data.judgesCounts);

      }
    }).catch((error) => {
      console.error('Error fetching count:', error);
    });

    axios.get(`/judges/count/beatbox`).then((res) => {
      if (res.data.success) {
        console.log('Received G B judges count:', res.data.judgesCounts);

        setBcount(res.data.judgesCounts);
      }
    }).catch((error) => {
      console.error('Error fetching count:', error);
    });

    axios.get(`/vjudges/count/dancing`).then((res) => {
      if (res.data.success) {
        console.log('Received dancing judges count:', res.data.jcount);

        setVJcount(res.data.jcount);
      }
    }).catch((error) => {
      console.error('Error fetching count:', error);
    });

    axios.get(`/vjudges/count/beatbox`).then((res) => {
      if (res.data.success) {
        setVBcount(res.data.bcount);
      }
    }).catch((error) => {
      console.error('Error fetching count:', error);
    });


  }, []);

  return (
    <div>
      <button className="btn btn-success">
        <a href="/addjudge" style={{ color: 'white', textDecoration: 'none' }}>Add Judges</a>
      </button> 

      <h3 style={{ marginTop: '20px', fontSize: '18px',  color: 'white' }}>
        Add {jcount - vjcount} judges for dancing event
      </h3>

      <h3 style={{ fontSize: '18px',  color: 'white' }}>
        Add {bcount - vbcount} judges for beatbox event
      </h3>
    </div>
  );
}

export default JudgeCount;
