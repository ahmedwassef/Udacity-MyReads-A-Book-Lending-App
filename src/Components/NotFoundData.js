import React  from "react";
 import NotFoundImage from "../Assets/Images/not-found.png"

 
 function NotFoundData(props) {
        return (
            <div className="center">
                <img src={NotFoundImage} width="200px"  alt="not-found" /> 
                <h1> There are no items to show </h1>
            </div>
        );
     
}

export default NotFoundData;
