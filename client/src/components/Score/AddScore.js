import React, { useState, useEffect } from "react";
import '../Style/score/AddScore.css'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddScore() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const Cname = searchParams.get("Cname");
    const Category = searchParams.get("Category");

    // const [Cname, setCname] = useState(0);
    // const [Category, setCategory] = useState(0);
    const [Performance, setPerformance] = useState(0);
    const [Costume, setCostume] = useState(0);
    const [Technique, setTechnique] = useState(0);
    const [Timing, setTiming] = useState(0);
    const [Feedback, setFeedback] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    // Inside sendData function
function sendData(e) {
    e.preventDefault();
    setButtonClicked(true); // Set buttonClicked to true when the button is clicked
    submitDataToDatabase();
}

// Inside useEffect
useEffect(() => {
    const timeout = setTimeout(() => {
        if (!buttonClicked) {
            console.log("Timeout occurred. Submitting data");
            submitDataToDatabase();
        }
    }, 7000);

    return () => clearTimeout(timeout);
}, [buttonClicked, Performance, Costume, Technique, Timing, Feedback]); // Add state dependencies to ensure the latest state is used


function submitDataToDatabase() {
    const CnameValue = Cname;
    const CategoryValue = Category;
    const PerformanceValue = Performance === '' ? 'NOT' : Performance;
    const CostumeValue = Costume === '' ? 'NOT' : Costume;
    const TechniqueValue = Technique === '' ? 'NOT' : Technique;
    const TimingValue = Timing === '' ? 'NOT' : Timing;
    const FeedbackValue = Feedback === '' ? 'NOT' : Feedback;

    const newScore = {
        Cname: CnameValue,
        Category: CategoryValue,
        Performance: PerformanceValue,
        Costume: CostumeValue,
        Technique: TechniqueValue,
        Timing: TimingValue,
        Feedback: FeedbackValue
    };

    axios.post("http://localhost:8020/score/add", newScore)
        .then(() => {
            console.log(newScore);
            alert("Score Added");
            navigate('/candidateaddscore');
        })
        .catch((err) => {
            alert(err);
        });
}

    return (
        <div className="Main">
            <h2>Score and Feedback</h2>
            <form className="row g-3  formAdd" onSubmit={sendData}>

            <div className="mb-3 col-md-6">
                    <label htmlFor="Cname">Candidate Name</label>
                    <input type="text" className="form-control" id="Cname" placeholder="Candidate Name" name="Cname" value={Cname}  readOnly /*onChange={(e) => {
                            setCname(e.target.value);
                        }}*//>
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="Category">Dance Category</label>
                    <input type="text" className="form-control" id="Category" placeholder="Dance Category" value={Category} readOnly /*onChange={(e) => {
                            setCategory(e.target.value);
                        }}*//>
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
