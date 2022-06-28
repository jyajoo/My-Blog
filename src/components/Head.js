import { Link } from "gatsby";
import React from "react";

function Head() {
    return (
        <header style = {{display : "flex"}}>
            <Link to="/">Logo</Link>
            <div style = {{flexGrow:1}}></div>
            <Link to = "/test" style = {{padding : 10}}>Test</Link>
            <Link to = "/test-space" style = {{padding : 10}}>Test Space</Link>
        </header>
    );
}

export default Head;