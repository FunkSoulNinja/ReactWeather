import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        const location = this.refs.navSearch.value;
        const encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.navSearch.value = '';
            window.location.hash = `#/?location=${encodedLocation}`;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch} >
                        <ul className="menu">
                            <li>
                                <input ref="navSearch" type="search" placeholder="Search by city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>

                    </form>
                </div>
            </div>
        );
    }
});

export default Nav;
