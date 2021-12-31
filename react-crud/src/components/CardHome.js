import React from "react";
import { Link } from "react-router-dom";

const CardHome = () => {
  return (
    <div className="card text-center">
      <div className="card-header">Eko Purnama Azi</div>
      <div className="card-body">
        <h5 className="card-title">I'm Learning React</h5>
        <p className="card-text">
          I will start this lesson from 0 to understand all the basics of React
        </p>
        <Link to="/" className="btn btn-primary">
          Stay on Homepage
        </Link>
      </div>
      <div className="card-footer text-muted">Start 26 Desember 2021</div>
    </div>
  );
};

export default CardHome;
