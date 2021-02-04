import React, { Component } from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner/spiner";

export default class ItemList extends Component {
  state = {
    peopleList: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }
  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spiner />;
    }
    const items = this.renderItems(peopleList);
    return (
      <div className="wapper-item-list">
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
