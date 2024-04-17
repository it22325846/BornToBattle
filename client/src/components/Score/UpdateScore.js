import React, { useState, useEffect } from "react";
import '../Style/score/AddScore.css'
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UpdateScore() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const scoreId = searchParams.get("id");
    const Cname= searchParams.get("Cname");
    const Category = searchParams.get("Category");
    const initialPerformance = searchParams.get("Performance");
    const initialCostume = searchParams.get("Costume");
    const initialTechnique = searchParams.get("Technique");
    const initialTiming = searchParams.get("Timing");
    const initialFeedback = searchParams.get("Feedback");

    // const [Cname, setCname] = useState(initialCname);
    // const [Category, setCategory] = useState(initialCategory);
    const [Performance, setPerformance] = useState(initialPerformance);
    const [Costume, setCostume] = useState(initialCostume);
    const [Technique, setTechnique] = useState(initialTechnique);
    const [Timing, setTiming] = useState(initialTiming);
    const [Feedback, setFeedback] = useState(initialFeedback);

    function sendData(e) {
        e.preventDefault();
        const updatedScore = {
            Performance,
            Costume,
            Technique,
            Timing,
            Feedback
        };

        axios.put(`http://localhost:8070/score/update/${scoreId}`, updatedScore)
            .then(() => {
                alert("Score Updated");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="Main">

            <h2>Update Score and Feedback</h2>

            <form className="row g-3  formAdd" onSubmit={sendData}>
                
                <div className="mb-3 col-md-6">
                    <label htmlFor="CId">Candidate Name</label>
                    <input type="text" className="form-control" id="Cname" placeholder="Candidate Name" name="Cname" value={Cname} readOnly />
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="JId">Dance Category</label>
                    <input type="text" className="form-control" id="Category" placeholder="Dance Category" name="Category" value={Category} readOnly />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Performance">Performance Quality</label>
                    <input type="number" min="0" max="10" className="form-control" id="Performance" placeholder="Enter score out of 10" value={Performance} onChange={(e) => setPerformance(e.target.value)} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Costume">Costume and presentation</label>
                    <input type="number" min="0" max="10" className="form-control" id="Costume" placeholder="Enter score out of 10" value={Costume} onChange={(e) => setCostume(e.target.value)} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Technique">Technique</label>
                    <input type="number" min="0" max="10" className="form-control" id="Technique" placeholder="Enter score out of 10" value={Technique} onChange={(e) => setTechnique(e.target.value)} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Timing">Timing and Synchronization</label>
                    <input type="number" min="0" max="10" className="form-control" id="Timing" placeholder="Enter score out of 10" value={Timing} onChange={(e) => setTiming(e.target.value)} />
                </div>

                <div className="mb-3 col-12">
                    <label htmlFor="Feedback">Comments and Feedback</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="Feedback" value={Feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                </div>

                <div className="mb-3 col-12">
                    <button type="submit" className="btn btn-secondary">Update</button>
                </div>
            </form>
        </div>
    )
}
