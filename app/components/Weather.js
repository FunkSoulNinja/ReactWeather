import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import { getTemp } from '../api/openWeatherMap';
import ErrorModal from './ErrorModal';

const Weather = React.createClass({
    getInitialState: function () {
        return {
            location: '',
            temp: '',
            isLoading: false,
            error: ''
        };
    },
    handleSearch: function (location) {
        const that = this;

        this.setState({ isLoading: true, error: '' });

        getTemp(location).then(function (temp) {
            that.setState({
                location,
                temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({ isLoading: false, error: e.message });
        });
    },
    render: function () {
        const { location, temp, isLoading, error } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h1 className="text-center">Fetching weather...</h1>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError() {
            if (error) {
                return <ErrorModal message={error}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

export default Weather;
