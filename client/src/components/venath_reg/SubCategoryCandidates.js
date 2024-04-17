import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SubCategoryCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const { event } = useParams();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('cat');

    axios.get(`/candidates/${event}`)
      .then((res) => {
        if (res.data.success) {
          const filteredCandidates = res.data.existingCandidates.filter(candidate => {
            switch (categoryParam) {
              case 'u18bh':
                return candidate.age < 18 && candidate.age >= 16 && candidate.gender.toLowerCase() === 'male' && candidate.category === 'Hiphop';
              case 'u18gh':
                return candidate.age < 18 && candidate.age >= 16 && candidate.gender.toLowerCase() === 'female' && candidate.category === 'Hiphop';
              case 'o18bh':
                return candidate.age >= 18 && candidate.gender.toLowerCase() === 'male' && candidate.category === 'Hiphop';
              case 'o18gh':
                return candidate.age >= 18 && candidate.gender.toLowerCase() === 'female' && candidate.category === 'Hiphop';
              case 'u16bh':
                return candidate.age < 16 && candidate.gender.toLowerCase() === 'male' && candidate.category === 'Hiphop';
              case 'u16gh':
                return candidate.age < 16 && candidate.gender.toLowerCase() === 'female' && candidate.category === 'Hiphop';
              case 'o16bh':
                return candidate.age >= 16 && candidate.age < 18 &&  candidate.gender.toLowerCase() === 'male' && candidate.category === 'Hiphop';
              case 'o16gh':
                return candidate.age >= 16 && candidate.gender.toLowerCase() === 'female' && candidate.category === 'Hiphop';
              default:
                return true; // Default case, no filtering applied
            }
          });
          setCandidates(filteredCandidates);
        }
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, [event, location.search]);

  return (
    <div>
      <p style={{ color: 'white' }}>Candidate details</p>
      <table className="table" style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Event</th>
            <th>Category</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/candidate/${candidate._id}`}>
                  {candidate.name}
                </Link>
              </td>
              <td>{candidate.age}</td>
              <td>{candidate.gender}</td>
              <td>{candidate.event}</td>
              <td>{candidate.category}</td>
              <td>{candidate.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategoryCandidates;
