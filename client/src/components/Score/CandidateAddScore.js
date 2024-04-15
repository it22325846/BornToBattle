import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Style/FinalScore.css';
import axios from "axios";

export default function CandidateAddScore() {
    //const [candidates, setCandidates] = useState([]);
    const [finalScores, setFinalScores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch candidates and final scores from the backend when the component mounts
        axios.get("http://localhost:8070/score")
            .then(response => {
                setFinalScores(response.data);
            })
            .catch(error => {
                console.error("Error fetching candidates:", error);
            });
    }, []);

    const handleAddButtonClick = (Cname, Category) => {
        navigate(`/addscoreandfeedback?Cname=${Cname}&Category=${Category}`);
    };

    return (
        <div className="wrapper">
            <div>
                <h2>Final Resultsheet</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalScores.map(score => {
                            //const candidate = candidates.find(candidate => candidate.Cname === score.Cname);
                            return (
                                <tr key={score._id}>
                                    <td>{score.Cname}</td>
                                    <td>{score.Category}</td>
                                    <td>
                                        <div className="mb-3 col-12">
                                            <button type="button" className="btn btn-primary" onClick={() => handleAddButtonClick(score.Cname,score.Category)}>Add Score</button>
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
