import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import A_EditUserProfile from './A_EditUserProfile'; 
import './Style/A_UserProfile.css';



const A_UserProfile = () => {
    const [userDetails, setUserDetails] = useState({});
    const [editMode, setEditMode] = useState(false);




    useEffect(() => {
        const existingUsername = localStorage.getItem('username');

        if (!existingUsername) {
            alert("You don't have an account");
            window.location.href = '/A_signin';
        }
        else {
            fetchUserDetails();
        }

        // fetchUserDetails();
    }, []);



    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`/audience/${localStorage.getItem('username')}`);
            setUserDetails(response.data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };



    const handleDeleteAccount = async () => {
        try {
            await axios.delete(`/audience/${userDetails._id}`);
            await axios.delete(`/signup/delete/${localStorage.getItem('username')}`);

            localStorage.removeItem('username');
            alert("Deleted successfully");
            window.location.href = '/';

        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };



    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleSignOut = () => {
        localStorage.removeItem('username');
        window.location.href = '/';
      };




    return (
        <div className="container1">
            <h2 className="h2" > Welcome, {userDetails.username} </h2>

            {userDetails && (
                <div>
                    <p className="ap" >Username : {userDetails.username}</p>
                    {editMode ? (
                        <A_EditUserProfile
                            userDetails={userDetails}
                            fetchUserDetails={fetchUserDetails}
                            toggleEditMode={toggleEditMode}
                        />
                    ) : (
                        <div>

                            <p className="ap"  >Name : {userDetails.name}</p>
                            <p className="ap"  >Age : {userDetails.age}</p>
                            <p className="ap"  >Gender : {userDetails.gender}</p>
                            <p className="ap"  >Phone Number : {userDetails.phoneNumber}</p>
                        </div>
                    )}

                    <div className="btn-container1">
                        <button className="btn2" onClick={toggleEditMode}>
                            <i className="fas fa-edit"></i>&nbsp;
                            {editMode ? 'Cancel ' : 'Edit ' }
                        </button>
                        <button className="btn2" onClick={handleDeleteAccount}>
                            <i className="far fa-trash-alt"></i>&nbsp;
                            Delete Account
                        </button>
                        <button className="btn2" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>

                </div>
            )}
        </div>

        
    );

    // return (
    //     <div className="container1">
    //         <h2 className="h2" > Welcome, {userDetails.username} </h2>

    //         {userDetails && (
    //             <div className="user-details-table">
    //                 <div className="row">
    //                     <div className="label">Username :</div>
    //                     <div className="value">{userDetails.username}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="label">Name :</div>
    //                     <div className="value">{userDetails.name}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="label">Age :</div>
    //                     <div className="value">{userDetails.age}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="label">Gender :</div>
    //                     <div className="value">{userDetails.gender}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="label">Phone Number :</div>
    //                     <div className="value">{userDetails.phoneNumber}</div>
    //                 </div>


    //                 <div className="button-container">

    //                     <button className="btn2" onClick={toggleEditMode}>
    //                         <i className="fas fa-edit"></i>
    //                         {editMode ? 'Cancel' : 'Edit'}
    //                     </button>
    //                     <button className="btn2" onClick={handleDeleteAccount}>
    //                         <i className="far fa-trash-alt"></i>
    //                         Delete Account
    //                     </button>
    //                     <button className="btn2" onClick={handleSignOut}>
    //                         Log Out
    //                     </button>

    //                 </div>

    //             </div>
    //         )}
    //     </div>
    // );



};

export default A_UserProfile;

