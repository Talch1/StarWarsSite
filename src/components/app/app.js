import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list/";
import StarshipDetails from "../starship-details/starship-details";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import PlanetDetails from "../planets-details/planet-details";
import ItemDetails from "../item-details";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    seePlanet: true,
    seeSpinerPerson: true,
    selectedPerson: 5,
  };

  togglePlanet = () => {
    if (this.state.seePlanet) {
      this.setState({ seePlanet: false });
    } else {
      this.setState({ seePlanet: true });
    }
  };

  personOpen = (id) => {
    this.setState({
      selectedPerson: id,
      selectedStarship: id,
      seeSpinerPerson: false,
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.personOpen}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender} ,${birthYear})`
        }

      />
    );
    return (
      <div className="container">
        <Header />
        {this.state.seePlanet ? <RandomPlanet /> : null}
        <div className="row d-flex justify-content-center ">
          <button className="btn btn-primary " onClick={this.togglePlanet}>
            Toggle Rundom Planet
          </button>
        </div>
        <div className="row">
          <div className="col-5">{itemList}</div>
          <div className="col-7 mt-4">
            <ItemDetails itemId={this.state.selectedPerson} 
             getData={this.swapiService.getPerson}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <ItemList
              onItemSelected={this.personOpen}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-7 mt-4">
            <StarshipDetails  personId={this.state.selectedStarship} />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <ItemList
              onItemSelected={this.personOpen}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-7 mt-4">
            <PlanetDetails  personId={this.state.selectedStarship} />
          </div>
        </div>
      </div>
    );
  }
}
