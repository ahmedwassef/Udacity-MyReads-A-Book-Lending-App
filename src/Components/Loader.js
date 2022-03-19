import React, {Component} from "react";
import LoadingGIF from "../Assets/Images/loading.gif"

class Loader extends Component {

    render() {
         
        return (
            <div className="center">
                 <img src={LoadingGIF} className="loading" /> 
            </div>
        );
    }
}

export default Loader;
