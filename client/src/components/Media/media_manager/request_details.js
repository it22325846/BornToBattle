import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/reqForm.css";
import { useReactToPrint } from "react-to-print";

export default function MediaManagerUI() {

  const componentPDF = useRef();
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8020/requestForm/read")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching request forms:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8020/requestForm/delete/${id}`)
      .then(() => {
        setForms(forms.filter((form) => form._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting request form:", error);
      });
  };

  const generatePDF= useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data saved in PDF")
});

  return (
    <div className="container11">
      <h2 className="h21">Request Forms</h2>
      <div className="table1">
      <div ref={componentPDF} style={{width:'100%'}}>
      <table className="table111">
        <thead>
          <tr>
            <th className="th111">First Name</th>
            <th className="th111">Last Name</th>
            <th className="th111">Email</th>
            <th className="th111">Address 1</th>
            <th className="th111">Address 2</th>
            <th className="th111">City</th>
            <th className="th111">State</th>
            <th className="th111">ZIP</th>
            <th className="th111">Description</th>
            <th className="th111">Action</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id}>
              <td className="td111">{form.fname}</td>
              <td className="td111">{form.lname}</td>
              <td className="td111">{form.email}</td>
              <td className="td111">{form.address1}</td>
              <td className="td111">{form.address2}</td>
              <td className="td111">{form.city}</td>
              <td className="td111">{form.state}</td>
              <td className="td111">{form.zip}</td>
              <td className="td111">{form.description}</td>
              <td>
                <button onClick={() => handleDelete(form._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <div className="d-grid d-md-flex justify-content-md-end mb-3">
          <button className="btn btn-success" onClick={ generatePDF}>CREATE PDF</button>                       
      </div> 

    </div>
  );
}
