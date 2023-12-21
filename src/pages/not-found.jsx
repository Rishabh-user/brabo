import React from "react";
import ErrorImage from '../assets/images/404-page.png';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error">
      <section>
        <div className="container text-center">
            <h2>Oops page not found</h2>
            <img src={ErrorImage} alt="ErrorImage" className="img-fluid" width={500} height={500} />
            <p>Wre can't seem to  find a page you'r looking for.</p>
            <div>
              <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
            </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
