import React from "react";
import { Link } from "react-router-dom";
import ListNotes from "../pages/ListNotes";
const CardProduct = () => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <Link className="nav-link active" to="/addNotes">
              Add Product
            </Link>
          </li>
        </ul>
      </div>
      <ListNotes />
    </div>
  );
};

export default CardProduct;
