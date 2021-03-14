import React, { Component } from "react";
import "./item-details.css";
import SwapiService from "../../services/swapi-service";
export default class ItemDetails extends Component {
  state = {
    item: null,
    itemId :5
  };

  swapiService = new SwapiService();
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps){
if (this.props.itemId !== prevProps.itemId){
this.updateItem();

}
  }
  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.props.getData(itemId).then((item) => {
      this.setState({ item });
    });
  }
  render() {
    if (!this.state.item) {
      return <span>Select item from List</span>;
    }
    const { id, name, gender, birth_year, eye_color } = this.state.item;
    return (
    
      <div className="random-planet jumbotron rounded">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
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
