import React, { useState } from 'react';
// import axios from 'axios';
import '../Style/Comment_list.css';


const M_CommentList = ({ comments, onDelete, onEdit }) => {

  const username = localStorage.getItem('username');
  const [editedComment, setEditedComment] = useState({ id: null, text: ' ' });


  const handleEdit = (id, text) => {
    setEditedComment({ id, text });
  };

  
  const handleSave = async (id, text) => {
    try {
      await onEdit(id, text);
      setEditedComment({ id: null, text: '' });
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };




//   return (
//     <ul>
        
//       {comments.map(comment => (
//         <li key={comment._id}>
//             <div>
//                 <span> {comment.username}: {comment.comments}</span>
//                 <span style={{ fontSize: '10px', color: 'black', marginLeft: '5px' }} > 
//                     ({new Date(comment.create).toLocaleString()})
//                 </span>
//             </div>

            
//             {comment.username === username && (
//                 <>
//                     <button onClick={() => onDelete(comment._id)}>Delete</button>
//                     <button onClick={() => onEdit(comment._id)}>Edit</button>
//                 </>
//             )}

//         </li>
//       ))}
      
//     </ul>
//   );
// style={{ fontSize: '10px', color: 'black', marginLeft: '5px' }}



    return (
        <div className='comment_list'>
            <ul className='cc'>

            {comments.map(comment => (
                <li className='li-list' key={comment._id}>

                <div >
                    {/* <span className='username' >{comment.username}: </span> */}
                    <span className='comment' >
                        {editedComment.id === comment._id ? (
                            <textarea
                                className='textarea-save'
                                type="text"
                                value={editedComment.text}
                                onChange={e => setEditedComment({ id: comment._id, text: e.target.value })}
                                required
                            />
                        ) : comment.comments}
                    </span>
                        
                    <span className='username' >
                        ({comment.username}:{new Date(comment.create).toLocaleString()})
                    </span>
                </div>
                    
                <>
                    {/* <button className='btn1' onClick={() => handleEdit(comment._id, comment.comments)}>Edit</button> */}
                    <button className='btn1' onClick={() => onDelete(comment._id)}>Delete</button>
                </>

                

                {/* {comment.username === username && (
                    <>
                        {editedComment.id === comment._id ? (
                            <button onClick={() => handleSave(comment._id, editedComment.text)}>Save</button>
                        ) : (
                            <>
                                <button className='btn1' onClick={() => handleEdit(comment._id, comment.comments)}>Edit</button>
                                <button className='btn1' onClick={() => onDelete(comment._id)}>Delete</button>
                            </>
                        )}
                    </>
                )} */}

                </li>
            ))}

            </ul>
        </div>
    );


};



export default M_CommentList;
