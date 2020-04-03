import React, { Component } from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list/'
import PeopleDetails from '../people-details'
import './app.css'
export default class App extends Component {

    render() {

        return (
            <div className='container'>
                <Header />
                <RandomPlanet />
                <ItemList />
                <PeopleDetails />
            </div>
        )
    }
}