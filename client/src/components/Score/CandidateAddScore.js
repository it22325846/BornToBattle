import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Style/score/FinalScore.css'

export default function CandidateAddScore() {
    const [candidates, setCandidates] = useState([]);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [scoredNames, setScoredNames] = useState([]); // State to store names with scores
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch candidate data
        axios.get("http://localhost:8020/candidates")
            .then(response => {
                setCandidates(response.data.existingCandidates);
            })
            .catch(error => {
                console.error("Error fetching candidates:", error);
            });

        // Fetch names with scores
        axios.get("http://localhost:8020/score")
            .then(response => {
                const names = response.data.map(score => score.Cname);
                console.log("Names:", names);
                setScoredNames(names);
            })
            .catch(error => {
                console.error("Error fetching names with scores:", error);
            });
    }, []);

    const handleAddButtonClick = (name, category, index) => {
        navigate(`/addscore?Cname=${name}&Category=${category}`);
        setClickedButtons(prevState => [...prevState, index]);
    };

    return (
        <div className="wrapper">
            <div>
                <h2>Candidates</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Event</th>
                            <th>Category</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate, index) => (
                            <tr key={candidate._id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.event}</td>
                                <td>{candidate.category}</td>
                                <td>{candidate.age}</td>
                                <td>{candidate.phoneNumber}</td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary custom" 
                                        onClick={() => handleAddButtonClick(candidate.name, candidate.category, index)} 
                                        disabled={scoredNames.includes(candidate.name) || clickedButtons.includes(index)} 
                                    >
                                        {scoredNames.includes(candidate.name) ? "Score Added" : (clickedButtons.includes(index) ? "Adding Score" : "Add Score")}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
