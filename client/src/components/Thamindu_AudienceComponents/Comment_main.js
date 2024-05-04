import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './Comment_form';
import CommentList from './Comment_list';

import './Style/Comment_main.css';



const MainComponent = () => {

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


//   const handleSubmit = async (newComment) => {
//     try {
//       const response = await fetch('/comments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newComment)
//       });
//       const data = await response.json();
//       setComments([...comments, data]);
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };


  const deleteComment = async (id) => {
    try {
      await axios.delete(`/comments/${id}`);
      setComments(comments.filter(comment => comment._id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };


//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/comments/${id}`, {
//         method: 'DELETE'
//       });
//       setComments(comments.filter(comment => comment._id !== id));
//     } catch (error) {
//       console.error('Error deleting comment:', error);
//     }
//   };


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

  


//   const handleEdit = async (id) => {
//     // Implement edit functionality

//     try {
//         // Fetch the specific comment by ID
//         const response = await fetch(`/comments/${id}`);
//         const commentToEdit = await response.json();
    
//         // Prompt the user to enter the updated comment
//         const updatedComment = prompt('Enter updated comment:', commentToEdit.comment);

//         if (updatedComment !== null) {
//           // Update the comment on the server
//           const updatedResponse = await fetch(`/comments/${id}`, {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ comment: updatedComment })
//           });
//           if (updatedResponse.ok) {
//             // Update the comment in the local state
//             setComments(comments.map(comment => 
//               comment._id === id ? { ...comment, comment: updatedComment } : comment
//             ));
//           } else {
//             console.error('Failed to update comment');
//           }
//         }
//       } catch (error) {
//         console.error('Error editing comment:', error);
//       }

//     console.log('Edit comment:', id);
//   };


  return (
    <div className='comment_main'>
      <div className='comment_form'>
        <h2 style={{ color: 'white', fontFamily: 'cursive', fontWeight: 'bolder', textShadow: '5px 5px 2px black', fontSize: '40px' }}>
          Share Your Thoughts with Us - Audience Comments & Feedback Hub
        </h2>
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



export default MainComponent;
