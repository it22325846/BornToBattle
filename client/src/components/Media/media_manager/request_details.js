import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/reqForm.css";

export default function MediaManagerUI() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/requestForm/read")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching request forms:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8070/requestForm/delete/${id}`)
      .then(() => {
        setForms(forms.filter((form) => form._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting request form:", error);
      });
  };

  return (
    <div>
      <h2 className="h21">Request Forms</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id}>
              <td>{form.fname}</td>
              <td>{form.lname}</td>
              <td>{form.email}</td>
              <td>{form.address1}</td>
              <td>{form.address2}</td>
              <td>{form.city}</td>
              <td>{form.state}</td>
              <td>{form.zip}</td>
              <td>{form.description}</td>
              <td>
                <button onClick={() => handleDelete(form._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
