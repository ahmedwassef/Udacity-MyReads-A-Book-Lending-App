import { Route, Routes } from "react-router-dom";

import React from "react";
import NotFound from "../Pages/NotFound";

/**
 * Generate all routes
 * @param routes
 * @returns {JSX.Element}
 * @constructor
 */
function RenderRoutes({ routes }) {
    return (
        <Routes>
            {routes.map((route, i) => {
                return  (
                    <Route
                    path={route.path}
                    exact={route.exact}
                    key={route.key}
                    element={ route.page }
                />);
            })}

        </Routes>
    );
}

export default RenderRoutes