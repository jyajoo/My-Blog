import { Link } from "gatsby";
import React from "react";

function Head() {
    return (
        <header style = {{display : "flex", gap: 10}}>
            <Link to= "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/test">Test</Link>
            <Link to = "/test-space">Test Space</Link>
        </header>
    );
}

export default Head;