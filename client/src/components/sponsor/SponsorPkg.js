import React from "react";
import { Link } from "react-router-dom";

export default function SponsorPkg() {
  return (
    <div>
      <div className="mb-4">
        <img
          className="img-fluid"
          src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="sponsseImg"
        />
      </div>

      <div className="container">
        <h2 className="text-center mb-4">Sponsorship Packages</h2>
        <div className="row">
          {/* Gold Sponsorship */}
          <div className="col-md-4 mb-4">
            <div className="card bg-warning text-dark rounded-4">
              <div className="card-body">
                <h5 className="card-title">Gold Sponsorship</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <div>
                  <Link to={"/sponsorcreate"}>
                    <button className="btn btn-primary px-3 border border-2">Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Silver Sponsorship */}
          <div className="col-md-4 mb-4">
            <div className="card bg-secondary text-white rounded-4">
              <div className="card-body">
                <h5 className="card-title">Silver Sponsorship</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <div>
                  <Link to={"/sponsorcreate"}>
                    <button className="btn btn-danger px-3 border border-2">Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bronze Sponsorship */}
          <div className="col-md-4 mb-4">
            <div className="card bg-info text-white rounded-4">
              <div className="card-body">
                <h5 className="card-title">Bronze Sponsorship</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <div>
                  <Link to={"/sponsorcreate"}>
                    <button className="btn btn-warning px-3 border border-2">Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
