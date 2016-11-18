import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import { getTemp } from '../api/openWeatherMap';

const Weather = React.createClass({
    getInitialState: function () {
        return {
            location: '',
            temp: '',
            isLoading: false
        };
    },
    handleSearch: function (location) {
        const that = this;

        this.setState({ isLoading: true });

        getTemp(location).then(function (temp) {
            that.setState({
                location,
                temp,
                isLoading: false
            });
        }, function (errorMessage) {
            console.log(errorMessage);
            that.setState({ isLoading: false });
        });
    },
    render: function () {
        const { location, temp, isLoading } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

export default Weather;
