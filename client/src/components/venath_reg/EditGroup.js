import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditGroup = () => {
  
  const [group, setGroup] = useState({});
  const { id } = useParams();
  const userType = localStorage.getItem('userType');

  const [formData, setFormData] = useState({
    groupName: '',
    name: '',
    age: '',
    gender: '',
    event: '',
    category: '',
    phoneNumber: '',
    members: []
  });

  useEffect(() => {
    axios.get(`/groups/${id}`).then((res) => {
      console.log("Group", res.data)
      if (res.data) {
        setGroup(res.data);
        setFormData({
          groupName: res.data.groupName,
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          event: res.data.event,
          category: res.data.category,
          phoneNumber: res.data.phoneNumber,
          members: res.data.members.map(member => ({ ...member })) // Create a copy of each member object
        });
      } else {
        console.log("Failed to fetch group data");
      }
    }).catch(error => {
      console.error("Failed to fetch group data:", error);
    });
  }, [id]);

  const handleChange = (index, e) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index].name = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      members: updatedMembers
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/updategroups/${id}`, formData)
      .then((res) => {
        
        if (res.data ) {
            console.log("Update response:", res.data);
          alert("Group updated successfully");
          if(userType=='group'){
            window.location.href = '/groupprofile';
          }
          else{
            window.location.href = '/editGroups';
          }
          
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        alert("Error occurred while updating group details.");
      });
  };

  return (
    <div>
      <h2>Edit Group</h2>
      <form onSubmit={handleSubmit} style={{ marginLeft: '1rem', color: 'white' }}>
        <div className="mb-3">
          <label htmlFor="groupName" className="form-label">
            Group Name
          </label>
          <input
            type="text"
            className="form-control"
            id="groupName"
            name="groupName"
            value={formData.groupName}
            onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
            required
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Leader Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            style={{ width: '30%' }}

            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="event" className="form-label">
            Event
          </label>
          <input
            type="text"
            className="form-control"
            id="event"
            name="event"
            value={formData.event}
            onChange={(e) => setFormData({ ...formData, event: e.target.value })}
            disabled
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            disabled
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            required
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="members" className="form-label">
            Group Members
          </label>
          {formData.members.map((member, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                value={member.name}
                style={{ width: '30%' }}

                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditGroup;
