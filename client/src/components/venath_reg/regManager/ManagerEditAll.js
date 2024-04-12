import React, { Component } from 'react';
import axios from 'axios';


export default class AdminEditAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    this.retrieveCandidates(); // Corrected method name
  }

  retrieveCandidates() {
    axios.get("/candidates").then((res) => {
      if (res.data.success) {
        this.setState({
          candidates: res.data.existingCandidates,
        });
        console.log(this.state.candidates);
      }
    })
    .catch((error) => {
      console.error("AxiosError:", error);
    });
  }

  onDelete = (id) => {
    axios.delete(`/candidate/delete/${id}`).then((res) => {
      alert("deleted");
      this.retrieveCandidates();
    });
  }

  filterData = (candidates, searchKey) => {
    const result = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchKey) ||
      (candidate.event && candidate.event.toLowerCase().includes(searchKey)) ||
      (searchKey === "male" && candidate.gender === "male") ||
      (searchKey === "female" && candidate.gender === "female")
    );
    this.setState({ candidates: result });
  };
  
  

  handleSearchArea=(e)=>{
 
    const searchKey=(e.currentTarget.value);
    

    
    axios.get("/candidates").then((res) => {
      if (res.data.success) {
      this.filterData(res.data.existingCandidates,searchKey)
      }
    })
    .catch((error) => {
      console.error("AxiosError:", error);
    });
    
  }




  render() {
    return (
        
      <div>
        
        <div>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
<button className="btn btn-success" type="submit">Search</button>


          </form>
          <p>Student details</p>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Event</th>
                <th>Category</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.candidates.map((candidate, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <a href={`/candidate/${candidate._id}`}>
                      {candidate.name}
                    </a>
                  </td>
                  <td>{candidate.age}</td>
                  <td>{candidate.gender}</td>
                  <td>{candidate.event}</td>
                  <td>{candidate.category}</td>
                <td>{candidate.phoneNumber}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${candidate._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    <a className="btn btn-danger" href="/" onClick={()=> this.onDelete(candidate._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success">
          <a href="/add" style={{ color: 'black' }}>Create New Student</a>
          </button>
        </div>
      
      </div>
      
    );
  }
}