import './Assets/Styles/App.css';
import React, {Component} from "react";
import RenderRoutes from "./Routes/RenderRoutes";
import ROUTES from "./Routes/Routes";

class App extends Component {
    render() {
        return <RenderRoutes routes={ROUTES}/>;
    }
}

export default App;
