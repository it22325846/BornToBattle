import React from "react";
import { Link } from 'react-router-dom';

export default function SponsorPage() {
  return (
    <div>
      <div className="position-relative">
        <div>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="sponsseImg"
          />
        </div>

        <div className="position-absolute top-50 start-50 translate-middle p-3 text-center">
          <h1 className="text-white" style={{ fontSize: "80px" }}>
            Sponsorship
          </h1>
          <p className="text-white">
            I've wrapped the image and the text div inside a container div with
            position-relative. The text div has position-absolute class to
            position it absolutely within the container. top-0, start-0, and
            translate-middle are Bootstrap utility classes to center the text
            horizontally and place it at the top of the image. p-3 adds padding
            to the text div. You can replace "Text on Top of Image" with the
            desired text you want to display on the image.
          </p>
          <div>
            <button
              id="cornerButton"
              className="btn btn-danger rounded-pill px-5 py-3 "
              type="submit"
            >
              Ask your Question
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Link to={'/sponsorForm'}>
          <button className='btn btn-warning'>sponsorform</button>
          </Link>
        </div>
        <div>
          <Link to={'/sponsorPkg'}>
          <button className='btn btn-danger'>sponsorpkg</button>
          </Link>
        </div>
        <div>
          <h2 className="text-start ms-5 mt-5">useful resources</h2>
          <div>
            <div className="row p-4 m-2">
              <div className="col-md-4">
                <div class="">
                  <img
                    src="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=pexels-rahul-pandit-1212487.jpg&fm=jpg"
                    class="img-fluid rounded-4"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-md-4">
                <div class="">
                  <img
                    src="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=pexels-rahul-pandit-1212487.jpg&fm=jpg"
                    class="img-fluid rounded-4"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-md-4">
                <div class="">
                  <img
                    src="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?cs=srgb&dl=pexels-rahul-pandit-1212487.jpg&fm=jpg"
                    class="img-fluid rounded-4"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
