import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export default function ReadSponsor() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const componentPDF = useRef();

  const navigateToUpdateSponsor = (sponsorid) => {
    navigate(`/sponsorupdate/${sponsorid}`);
  };

  useEffect(() => {
    function fetchUsers() {
      axios
        .get("http://localhost:8020/sponsor/read")
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

  const handlePrint = (event) => {
    event.preventDefault();
    generatePDF();
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "StallItemData",
  });

  return (
    <div className="mt-5">
      <div className="row" style={{marginLeft: '1.8in'}}>
        <input
          className="form-control me-2"
          style={{width: '8in'}}
          type="search"
          placeholder="Search company name here"
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn btn-success"
          style={{ marginLeft: "20px", marginTop: "-10px" }}
          onClick={handlePrint}
        >
          Download PDF
        </button>
      </div>
      {users
        .filter((sponsor) => {
          return search.toLowerCase() === ""
            ? sponsor
            : sponsor.companyName.toLowerCase().includes(search);
        })
        .map((user) => (
          <div className="d-flex justify-content-center" key={user._id}>
            <div
              className="w-100 text-white rounded p-3 mt-3 mb-5"
              style={{
                backgroundImage: 'url("../../../Images/red_and_black.jpg")',
                backgroundSize: "cover",
                borderRadius: "20px",
                marginInline: "4.5cm",
              }}
            >
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
                <table className="table text-dark" ref={componentPDF}>
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
