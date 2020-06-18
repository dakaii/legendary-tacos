import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import UpcomingMovieList from './UpcomingMovieList';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
            </Fragment>
        );
    }
}

export default Dashboard;
