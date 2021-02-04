import React, { Component } from "react";
import "./people-details.css";
import SwapiService from "../../services/swapi-service";
export default class PeopleDetails extends Component {
  state = {
    person: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePersone();
  }
  componentDidUpdate(prevProps){
if (this.props.personId !== prevProps.personId){
this.updatePersone();

}
  }
  updatePersone() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }
  render() {
    if (!this.state.person) {
      return <span>Select person from List</span>;
    }
    const { id, name, gender, birth_year, eye_color } = this.state.person;
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
