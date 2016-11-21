import React from 'react';
import { Link } from 'react-router';

const Examples = () => {
    return (
        <div>
            <h1 className="text-centered">Examples</h1>
            <p>Here are a few examples locations to try out</p>
            <ol>
                <li><Link to="/?location=las%20vegas">Las Vegas</Link></li>
                <li><Link to="/?location=Tokyo">Tokyo</Link></li>
            </ol>
        </div>
    );
};

export default Examples;
