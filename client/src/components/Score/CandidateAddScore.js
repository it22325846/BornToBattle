import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/score/FinalScore.css';
import axios from "axios";

export default function CandidateAddScore() {
    //const [candidates, setCandidates] = useState([]);
    const [finalScores, setFinalScores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch candidates and final scores from the backend when the component mounts
        axios.get("http://localhost:8020/candidate/candidates")
            .then(response => {
                setFinalScores(response.data);
            })
            .catch(error => {
                console.error("Error fetching candidates:", error);
            });
    }, []);

    const handleAddButtonClick = (name, category) => {
        navigate(`/addscoreandfeedback?Cname=${name}&Category=${category}`);
    };

    return (
        <div className="wrapper">
            <div>
                <h2>Candidates</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalScores.map(candidate => {
                            //const candidate = candidates.find(candidate => candidate.Cname === score.Cname);
                            return (
                                <tr key={candidate._id}>
                                    <td>{candidate.name}</td>
                                    <td>{candidate.category}</td>
                                    <td>
                                        <div className="mb-3 col-12">
                                            <button type="button" className="btn btn-primary" onClick={() => handleAddButtonClick(candidate.name,candidate.category)}>Add Score</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
