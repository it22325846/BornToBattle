import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ReadSponsor() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToUpdateSponsor = (sponsorid) => {
    navigate(`/Sponsorupdate/${sponsorid}`);
  };

  useEffect(() => {
    function fetchUsers() {
      axios
        .get("http://localhost:8070/sponsor/read")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    fetchUsers();
  }, []);

  function deleteSponsor(Sponsorid) {
    axios
      .delete(`http://localhost:8070/sponsor/delete/${Sponsorid}`)
      .then(() => {
        alert("Sponsor Deleted.");
        navigate("/Users");
      })
      .catch((err) => {
        alert("couldn't delete the sponsor.", err);
      });
  }

  const filteredSponsor = users.filter(sponsor => {
    return sponsor.companyName.toLowerCase().includes(searchQuery.toLowerCase());
  });
    
  return (
    
    <div>
      <input
          className="form-control me-2"
          type="search"
          placeholder="Search company name here"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      {users.map((user) => (
        <div
          className="d-flex vh-100 bg-primary justify-content-center align-items-center"
          key={user._id}
        >
          <div className="w-50 bg-white rounded p-3">
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h3>{user.companyName}</h3>
                </div>
                <div>
                  {user.companyLogo && (
                    <img
                      src={`http://localhost:8070/sponsor/uploads/${user.companyLogo}`}
                      alt="company logo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </div>
              </div>
              <table className="table">
                <thead className="text-start">
                  <tr>
                    <th>sponsorName</th>
                    <td> {user.sponsorName} </td>

                    <th>website</th>
                    <td> {user.website}</td>
                  </tr>

                  <tr>
                    <th>sponsorPosition</th>
                    <td> {user.sponsorPosition} </td>

                    <th>contactPerson</th>
                    <td> {user.contactPerson} </td>
                  </tr>

                  <tr>
                    <th>companyPhone</th>
                    <td> {user.companyPhone}</td>

                    <th>address</th>
                    <td> {user.address}</td>
                  </tr>

                  <tr>
                    <th>state</th>
                    <td> {user.state}</td>

                    <th>email</th>
                    <td> {user.email}</td>
                  </tr>
                </thead>
              </table>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-warning"
                  onClick={() => navigateToUpdateSponsor(user._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSponsor(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
