import React, { useState } from "react";
import '../Style/score/AddScore.css'
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function AddScore() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Cname = searchParams.get("Cname");
    const Category = searchParams.get("Category");

    //const [Cname, setCname] = useState('');
    //const [Category, setCategory] = useState('');
    const [Performance, setPerformance] = useState(0);
    const [Costume, setCostume] = useState(0);
    const [Technique, setTechnique] = useState(0);
    const [Timing, setTiming] = useState(0);
    const [Feedback, setFeedback] = useState('');

    function sendData(e) {
        e.preventDefault();

        const newScore = {
            Cname,
            Category,
            Performance,
            Costume,
            Technique,
            Timing,
            Feedback
        }

        axios.post("http://localhost:4000/score/add", newScore).then(() => {
            console.log(newScore);
            alert("Score Added")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div className="Main">

            <h2>Score and Feedback</h2>
            
            <form className="row g-3  formAdd" onSubmit={sendData}>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Cname">Candidate ID</label>
                    <input type="text" className="form-control" id="Cname" placeholder="Candidate Name" name="Cname" value={Cname} readOnly/>
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Category">Candidate Name</label>
                    <input type="text" className="form-control" id="Category" placeholder="Dance Category" value={Category} readOnly/>
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Performance">Performance Quality</label>
                    <input type="number" min="0" max="10" className="form-control" id="Performance" placeholder="Enter score out of 10"
                        onChange={(e) => {
                            setPerformance(e.target.value);
                        }} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Costume">Costume and presentation</label>
                    <input type="number" min="0" max="10" className="form-control" id="Costume" placeholder="Enter score out of 10"
                        onChange={(e) => {
                            setCostume(e.target.value);
                        }} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Technique">Technique</label>
                    <input type="number" min="0" max="10" className="form-control" id="Technique" placeholder="Enter score out of 10"
                        onChange={(e) => {
                            setTechnique(e.target.value);
                        }} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Timing">Timing and Synchronization</label>
                    <input type="number" min="0" max="10" className="form-control" id="Timing" placeholder="Enter score out of 10"
                        onChange={(e) => {
                            setTiming(e.target.value);
                        }} />
                </div>

                <div className="mb-3 col-12">
                    <label htmlFor="Feedback">Comments and Feedback</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="Feedback"
                        onChange={(e) => {
                            setFeedback(e.target.value);
                        }}></textarea>
                </div>

                <div className="mb-3 col-12">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>

            </form>
        </div>
    )
}
