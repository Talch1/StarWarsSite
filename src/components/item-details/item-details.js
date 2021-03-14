import React, { Component } from "react";
import "./item-details.css";
import SwapiService from "../../services/swapi-service";
export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  };

  swapiService = new SwapiService();
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item.id) });
    });
  }

  render() {
    const {image} = this.state;
    if (!this.state.item) {
      return <span>Select item from List</span>;
    }
    const { name, gender, birth_year, eye_color, } = this.state.item;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="person-image" src={image} alt="" />
        <div>
          <h4>{name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birth_year}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eye_color}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
