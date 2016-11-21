import React from 'react';

const WeatherMessage = ({ location, temp }) => {
    return (
        <div>
            <h3 className="text-center">it is {temp} degrees in {location}</h3>
        </div>
    );
};

export default WeatherMessage;
