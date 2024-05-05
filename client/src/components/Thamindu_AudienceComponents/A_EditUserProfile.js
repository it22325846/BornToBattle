import React, { useState } from "react";
import axios from "axios";



const A_EditUserProfile = ({ userDetails, fetchUserDetails, toggleEditMode }) => {


    const [editedUserDetails, setEditedUserDetails] = useState({ ...userDetails });
    // const [phoneNumberError, setPhoneNumberError] = useState('');
    // const [ageError, setAgeError] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'age' && ( value > 90)) {
            alert('Age must be within 0-90')
            return;
        }
        if (name === 'phoneNumber' && value.length > 10) {
            alert('phoneNumber must be 10 digits')
            return; 
        }
        
        setEditedUserDetails({ ...editedUserDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!editedUserDetails.name || !editedUserDetails.age || !editedUserDetails.gender || !editedUserDetails.phoneNumber) {
            alert('Please fill in all fields');
            return;
        }

        try {
            await axios.put(`/audience/update/${userDetails._id}`, editedUserDetails);
            await fetchUserDetails(); // Fetch updated user details
            toggleEditMode(); // Exit edit mode
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };





    return (
        <div className='container1'>

            <form onSubmit={handleSubmit}>

                <label>
                    Name :
                    <input type="text" name="name" value={editedUserDetails.name} onChange={handleChange} />
                </label>
                <label>
                    Age :
                    <input type="number" name="age" value={editedUserDetails.age} onChange={handleChange} />
                </label>
                <label>
                    Gender :
                    <select name="gender" value={editedUserDetails.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Phone Number :
                    <input 
                        type="number" 
                        name="phoneNumber" 
                        placeholder="07* *** ****"
                        value={editedUserDetails.phoneNumber}
                        onChange={handleChange} 
                    />
                </label>



                <button type="submit" className="btn2">
                    Save Changes
                </button>

            </form>
            
        </div>
    );
};


export default A_EditUserProfile;