import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    window.location.href = '/';
  };
  


  const generateReport = async () => {

    try {

      const response = await axios.get('/generate-report');
      const filePath = response.data.filePath;
      console.log('Report generated successfully. File path:', filePath);
      
      const fileName = filePath.split('/').pop(); // Extracts the file name from the file path



      // Create a download link for the report
      const downloadLink = document.createElement('a');
      downloadLink.href = filePath;
      downloadLink.setAttribute('download', fileName);
      // downloadLink.setAttribute('download', 'report.txt');
      downloadLink.textContent = 'Download Report';
      document.body.appendChild(downloadLink);
      
      downloadLink.click();                     // Trigger the click event to initiate download
      document.body.removeChild(downloadLink);     // Remove the download link from the DOM after download
      alert("Report generating successful ");

    } catch (error) {
      console.error('Error generating report:', error);
      alert("Error in generating Report");

    }
  };


  




  return (
    <div className='comment_main'>
      
      <button className="btn2" onClick={handleSignOut}>
        Sign Out
      </button>
      <button className="btn2" onClick={generateReport}>
        Generate Report
      </button>

      
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
