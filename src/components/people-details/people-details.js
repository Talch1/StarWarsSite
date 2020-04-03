import React,{Component} from 'react';
import './people-details.css'
export default class PeopleDetails extends Component{
    render(){
        return(
            <div className="random-planet jumbotron rounded">
            <img className="person-image"
                 src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />
            <div>
              <h4>R2 </h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Gender</span>
                  <span>man</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Birth Year</span>
                  <span>43</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Eye Color</span>
                  <span>red</span>
                </li>
              </ul>
            </div>
          </div>
    
        )
    }

}