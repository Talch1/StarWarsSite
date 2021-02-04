import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list/";
import PeopleDetails from "../people-details";
import "./app.css";
import Spinner from "../spiner/spiner";
export default class App extends Component {
  state = {
    seePlanet: true,
    seeSpinerPerson :true,
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
      seeSpinerPerson:false
    });
  };
  render() {
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
          <div className="col-5">
            <ItemList onItemSelected={this.personOpen} />
          </div>
          <div className="col-7 mt-4">
           <PeopleDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
