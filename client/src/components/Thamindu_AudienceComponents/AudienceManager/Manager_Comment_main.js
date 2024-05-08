import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import CommentForm from './Manager_Comment_form';
import CommentList from './Manager_Comment_list';

import '../Style/Comment_main.css';



const M_MainComponent = () => {

  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetchComments();
  }, []);


  const fetchComments = async () => {
    try {
      const response = await axios.get('/comments');
      setComments(response.data);

    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };


  const addComment = async (newComment) => {
    try {
    //   const response = await axios.post('/comments', newComment);
    //   setComments([...comments, response.data]);

      setComments([...comments, newComment]);

    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };


  const deleteComment = async (id) => {
    try {
      await axios.delete(`/comments/${id}`);
      setComments(comments.filter(comment => comment._id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };


  const editComment = async (id, updatedComment) => {
    try {
      const response = await axios.patch(`/comments/${id}`, { comment: updatedComment });
      console.log('Edit comment response:', response.data);
      const editedComment = response.data;

    //   await axios.patch(`/comments/${id}`, { comments: updatedComment });

      setComments(comments.map(comment => {
        if (comment._id === id) {
          return { ...comment, comments: editedComment.comments };

        //   return { ...comment, comments: updatedComment };

        }
        return comment;
      }));
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };


  const handleSignOut = () => {
    localStorage.removeItem('username');
    alert('Sign Out');
    window.location.href = '/';
  };
  

  const handleGenerateReport = () => {
    const printableContent = `
        <html>
            <head>
                <title>Comments Report</title>
                <style>
                    .comment {
                        margin-bottom: 10px;
                        padding: 10px;
                        border: 2px solid #ccc;
                        background-color: #f9f9f9;
                    }
                    .comment .title {
                        font-weight: bold;
                    }
                    .content1 {
                      font-size: 20px;
                    }
                    .content2 {
                      font-size: 14px;
                      font-weight: bold;
                      color: blue;
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
                <h1>Comments Report</h1>
                <button onclick="window.print()">
                    Print Report
                </button>
                <div class="comments">
                    ${comments.map((comment, index) => `
                        <div class="comment">
                            <div class="title">Comment ${index + 1}</div>
                            <div class="content1">${comment.comments}</div>
                            <div class="content2">${comment.username} : ${new Date(comment.create).toLocaleString()}</div>
                        </div>
                    `).join('')}
                </div>
            </body>
        </html>
    `;

    const reportWindow = window.open('', '_blank');
    reportWindow.document.open();
    reportWindow.document.write(printableContent);
    reportWindow.document.close();
  };


  // const generateReport = async () => {

  //   try {

  //     const response = await axios.get('/generate-report');
  //     const filePath = response.data.filePath;
  //     console.log('Report generated successfully. File path:', filePath);
      
  //     const fileName = filePath.split('/').pop(); // Extracts the file name from the file path



  //     // Create a download link for the report
  //     const downloadLink = document.createElement('a');
  //     downloadLink.href = filePath;
  //     downloadLink.setAttribute('download', fileName);
  //                                                           // downloadLink.setAttribute('download', 'report.txt');
  //     downloadLink.textContent = 'Download Report';
  //     document.body.appendChild(downloadLink);
      
  //     downloadLink.click();                     // Trigger  download
  //     document.body.removeChild(downloadLink);     // Remove the download link 
  //     alert("Report generating successful ");

  //   } catch (error) {
  //     console.error('Error generating report:', error);
  //     alert("Error in generating Report");

  //   }
  // };


  
  // const handleGenerateReport = () => {
  //   window.print();
  // };



  return (
    <div className='comment_main'>
      
      <button className="btn2" onClick={handleSignOut}>
        Sign Out
      </button>
      <button className="btn2" onClick={handleGenerateReport}>
        Generate Report
      </button>
      <Link to="/Manager_Audience" className="btn2">
        Audience Manager
      </Link>

      
      <div className='comment_form'>
        <CommentForm onAddComment={addComment} />
      </div>

      <div className='comment_list'>
        <CommentList 
          comments={comments} 
          onDelete={deleteComment} 
          onEdit={editComment} 
        />
      </div>
      
      

    </div>
  );
};



export default M_MainComponent;
