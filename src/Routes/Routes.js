import BookList from "../Pages/BookList";
import BookSearch from "../Pages/BookSearch";
import NotFound from "../Pages/NotFound";
import React from "react";

/**
 * All app routes
 * @array {[{path: string, component: JSX.Element, exact: boolean, key: string}
 */
const ROUTES = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        page: (<BookList/>),
    },
    {
        path: "/search",
        key: "SEARCH",
        exact: false,
        page: (<BookSearch/>),
    },
    {
        path: "*",
        key: "404",
        exact: false,
        page: (<NotFound />),
    },
];


export default ROUTES;
