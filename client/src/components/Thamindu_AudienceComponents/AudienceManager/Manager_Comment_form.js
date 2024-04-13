

import React, { useState } from 'react';
import axios from 'axios';

import '../Style/Comment_form.css';


const CommentForm = ({ onAddComment }) => {

  const [comment, setComment] = useState('');
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const username = localStorage.getItem('username');
      const response = await axios.post('/comments', {
        comment,
        username
      });
      onAddComment(response.data);
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      // alert("You don't have an account");
      // window.location.href = '/A_signin';
    }
  };


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ comment, username });
//     setComment('');
//   };




  
  return (

    
    <form onSubmit={handleSubmit} className='form-submit'>
      
      <textarea 
        className='input-submit'
        type="text" 
        placeholder="Write a comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        required 
      />

      <button type="submit" className='btn-submit'>
        Submit
      </button>

    </form>
  );
};

export default CommentForm;
