import React, { useEffect, useState } from "react";
import axios from 'axios';

const RegDash =()=>{
  const [candidates, setCandidates] = useState([]); 
  const [judges, setJudges] = useState([]); 



    useEffect(() => {
    const manager = localStorage.getItem('username');
    if (manager == '') {
      alert("Please signin");
      window.location.href = '/';
    }
  }, []);



  
    const handleSignOut = () => {
        localStorage.removeItem('username');
        window.location.href = '/managerSignin';
      };

      //report generation
      useEffect(() => {
        fetchCandidates();
        fetchJudges();
    }, []);

      const fetchCandidates = async () => {
        try {
          const response = await axios.get('/candidates');
          console.log('Response from API:', response.data);
      
          // Check if the response indicates success and contains candidates
          if (response.data.success && Array.isArray(response.data.existingCandidates)) {
            setCandidates(response.data.existingCandidates);
          } else {
            console.error('Invalid response format or no candidates found:', response.data);
          }
        } catch (error) {
          console.error('Error fetching candidates:', error);
        }
      };
      
   
      const handleGenerateReport = () => {
        // Check if candidates is an array
        if (!Array.isArray(candidates)) {
          console.error('Candidates is not an array');
          return;
        }
      
        const printableContent = `
          <html>
            <head>
              <title>Candidates Report</title>
              <style>
                table {
                  border-collapse: collapse;
                  width: 100%;
                }
                th, td {
                  border: 1px solid black;
                  padding: 8px;
                  text-align: left;
                }
                button {
                  background-color: #000;
                  color: aliceblue;
                  height: 40px;
                  width: 100px;
                }
                button:hover {
                  background-color: #951212;
                  color: aliceblue;
                }
              </style>
            </head>
            <body>
              <h1>Candidates Report</h1>
      
              <button onclick="window.print()">
                Print Report
              </button>
      
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Username</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  ${candidates.map((user, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${user.name}</td>
                      <td>${user.age}</td>
                      <td>${user.un}</td>
                      <td>${user.phoneNumber}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </body>
          </html>
        `;
      
        const reportWindow = window.open('', '_blank');
        reportWindow.document.open();
        reportWindow.document.write(printableContent);
        reportWindow.document.close();
      };
       


      const fetchJudges = async () => {
        try {
          const response = await axios.get('/judges');
          console.log('Response from API:', response.data);
      
          // Check if the response indicates success and contains candidates
          if (response.data.success && Array.isArray(response.data.existingJudges)) {
            setJudges(response.data.existingJudges);
          } else {
            console.error('Invalid response format or no judges found:', response.data);
          }
        } catch (error) {
          console.error('Error fetching judges:', error);
        }
      };
      
      const handleGenerateReportJudges = () => {

    // Generate CSV content
    const csvContent = generateCSV(judges);

    // Download CSV file
    downloadCSV(csvContent, 'judges_report.csv');



        // Check if candidates is an array
        if (!Array.isArray(judges)) {
          console.error('Candidates is not an array');
          return;
        }
      
        const printableContent = `
          <html>
            <head>
              <title>Judges Report</title>
              <style>
                table {
                  border-collapse: collapse;
                  width: 100%;
                }
                th, td {
                  border: 1px solid black;
                  padding: 8px;
                  text-align: left;
                }
                button {
                  background-color: #000;
                  color: aliceblue;
                  height: 40px;
                  width: 100px;
                }
                button:hover {
                  background-color: #951212;
                  color: aliceblue;
                }
              </style>
            </head>
            <body>
              <h1>Judges Report</h1>
      
              <button onclick="window.print()">
                Print Report
              </button>
      
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  ${judges.map((user, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${user.name}</td>
                      <td>${user.username}</td>
                      <td>${user.phoneNumber}</td>
                      <td>${user.email}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </body>
          </html>
        `;
      
        const reportWindow = window.open('', '_blank');
        reportWindow.document.open();
        reportWindow.document.write(printableContent);
        reportWindow.document.close();
      };
      const generateCSV = (data) => {
        const header = 'Judge Name, Judge Username, Phone Number, Email\n';
        const rows = data.map(judges => `${judges.name}, ${judges.un}, ${judges.phoneNumber}, ${judges.email}`);
        return header + rows.join('\n');
      };
      const downloadCSV = (content, filename) => {
        const blob = new Blob([content], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      };

      return (
        <div>
          <style>{'body { background-color: #A2A2A2; }'}</style>
          <h3><a href="/managercandidates/dancing">Dancing All Candidates</a></h3><br></br>
          <h3><a href="/editGroups">Dancing All Groups</a></h3><br></br>
          <h3><a href="/managercandidates/beatbox">BeatBox All Candidates</a></h3>
    
          
    
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

         <button className="btn btn-lg btn-primary" onClick={handleGenerateReport}>
  Generate Reports for all the candidate
</button>


<br></br>
          <br></br>

         <button className="btn btn-lg btn-primary" onClick={handleGenerateReportJudges}>
  Generate Reports for all the judge
</button>

        </div>
      );
};
export default RegDash;