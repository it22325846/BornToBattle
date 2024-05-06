import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Style/FinalScore.css'
import axios from "axios";

export default function FinalScore() {
    const [finalScores, setFinalScores] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8070/score")
            .then(response => {
                // Organize scores by Cname
                const scoresByCname = response.data.reduce((acc, score) => {
                    const existingScore = acc.find(item => item.Cname === score.Cname);
                    if (existingScore) {
                        // If score with same Cname exists, update the existing score
                        existingScore.Performance += score.Performance;
                        existingScore.Costume += score.Costume;
                        existingScore.Technique += score.Technique;
                        existingScore.Timing += score.Timing;
                    } else {
                        // If score with this Cname doesn't exist, add it to the accumulator
                        acc.push({ ...score });
                    }
                    return acc;
                }, []);
                setFinalScores(scoresByCname);
            })
            .catch(error => {
                console.error("Error fetching final scores:", error);
            });
    }, []);

    // const handleSignInClick = () => {
    //     navigate("/judgescoresheet");
    // };

    const filteredScores = finalScores.filter(score => {
        return score.Cname.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="wrapper">
            <div>
                <div className="row">
                    <div className="col">
                        <h2>Final Resultsheet</h2>
                    </div>
                    <div className="col">
                        <form
                            className="d-flex justify-content-"
                            role="search"
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent form submission
                            }}
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search candidate name here"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {/* <button className="btn btn-outline-success" type="submit">
                                Search
                            </button> */}
                        </form>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Dance Category</th>
                            <th>Score</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredScores.map(score => (
                            <tr key={score._id}>
                                <td>{score.Cname}</td>
                                <td>{score.Category}</td>
                                <td>{score.Performance + score.Costume + score.Technique + score.Timing}</td>
                                <td>{score.Feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <button type="button" className="btn btn-secondary" onClick={handleSignInClick}>
                    Sign in as a Judge to update score
                </button> */}
            </div>
        </div>
    );
}
