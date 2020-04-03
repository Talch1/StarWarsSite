import React, { Component } from 'react';
import './random-planet.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spiner/spiner';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true
  }
  constructor() {
    super();
    this.updatePlanete();
  }
  swapi = new SwapiService();

  onPlanetLosdet = (planet) => {
    this.setState({
      planet,
      loading: false
    });

  }
  updatePlanete() {
    const id = Math.floor((Math.random() * 25) + 2);
    this.swapi.getPlanet(id)
      .then(this.onPlanetLosdet);

  }
  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <AfterLoading planet={planet} /> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    )
  }
}

const AfterLoading = ({ planet }) => {
  const { population, rotationPeriod, diameter, name, id } = planet
  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};