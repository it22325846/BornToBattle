import React from "react";
import { Link } from "react-router-dom";

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
            Experience the electrifying energy of "Born to Battle" dance
            competition. Showcase your brand to a captivated audience while
            supporting aspiring dancers. Benefit from extensive brand exposure,
            networking opportunities, and community engagement. Join us in
            shaping the future of dance and leave a lasting impression on the
            stage of champions.
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
          <h2 className="text-start ms-5 mt-5">Useful resources</h2>
          <div>
            <div className="row p-4 m-2">
              <div className="col-md-4">
                <div class="">
                  <img
                    src="https://www.maggi.lk/sites/default/files/maggi_logo_png_1.png"
                    className="img-fluid rounded-4 pt-5"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-md-4">
                <div class="bg-white">
                  <img
                    src="https://mooseclothingcompa7fe3d.zapwp.com/q:l/r:0/wp:1/w:1/u:https://mooseclothingcompany.com/wp-content/uploads/2020/12/cropped-2560x1440-white-solid-color-background.png"
                    className="img-fluid rounded-4"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-md-4">
                <div class="">
                  <img
                    src="https://play-lh.googleusercontent.com/mwdLls3RSBW6xeG2thn22e8yBbrJF-oTNAZaR0ADQTkrnFXMGrmHhkwnCtnSlFplboUn"
                    className="img-fluid rounded-4"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div>
              <Link to={"/sponsorpackage"}>
                <button className="btn btn-danger m-4 rounded-4" style={{ paddingInline: '150px', paddingTop: '50px', paddingBottom: '50px', fontSize: '50px', fontWeight: 'bolder' }}>Get Sponsorship</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}