import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../Assets/Images/not-found.png"

const NotFound = () => (
  <div>
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="center">
           <img src={NotFoundImage} width="200px" /> 
            <h1>whoops !! 404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
