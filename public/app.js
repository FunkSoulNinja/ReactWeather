import React from 'react';
import ReactDOM from "react-dom";

const Greeter = React.createClass({
    render: () => {
        return <h1>Hello!</h1>;
    }
});

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);
