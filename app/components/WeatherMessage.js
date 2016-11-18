import React from 'react';

const WeatherMessage = ({ location, temp }) => {
    return (
        <div>
            <h3>it is {temp} degrees in {location}</h3>
        </div>
    );
};

export default WeatherMessage;
