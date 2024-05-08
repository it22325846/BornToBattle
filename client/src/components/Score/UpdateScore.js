import React, { useState, useEffect } from "react";
import{useNavigate} from "react-router-dom";
import '../Style/score/AddScore.css'
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UpdateScore() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const [scoreId, setScoreId] = useState(searchParams.get("scoreId"));
    const [Cname, setCname] = useState(searchParams.get("Cname"));
    const [Category, setCategory] = useState(searchParams.get("Category"));
    const [Performance, setPerformance] = useState(searchParams.get("Performance"));
    const [Costume, setCostume] = useState(searchParams.get("Costume"));
    const [Technique, setTechnique] = useState(searchParams.get("Technique"));
    const [Timing, setTiming] = useState(searchParams.get("Timing"));
    const [Feedback, setFeedback] = useState(searchParams.get("Feedback"));

    useEffect(() => {
        setScoreId(searchParams.get("scoreId"));
        setCname(searchParams.get("Cname"));
        setCategory(searchParams.get("Category"));
        setPerformance(searchParams.get("Performance"));
        setCostume(searchParams.get("Costume"));
        setTechnique(searchParams.get("Technique"));
        setTiming(searchParams.get("Timing"));
        setFeedback(searchParams.get("Feedback"));
    }, [location.search]);


    function editData(e) {
        e.preventDefault();
        const updatedScore = {
            Performance,
            Costume,
            Technique,
            Timing,
            Feedback
        };

        axios.put(`http://localhost:8020/score/update/${scoreId}`, updatedScore)
            .then(() => {
                alert("Score Updated");
                navigate('/finalscoresheet');
            })
            .catch((err) => {
                alert(err);
                //console.log(`http://localhost:8070/score/update/${scoreId}`);
            });
    }

    return (
        <div className="Main">
            <h2>Score and Feedback</h2>
            <form className="row g-3  formAdd" onSubmit={editData}>
                
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
                    <button type="submit" className="btn btn-secondary" >Update</button>
                </div>
            </form>
        </div>
    )
}
