import React,{Component} from 'react';
import './item-list.css'

export default class ItemList extends Component{
    
    render(){
        return(
<div className = 'wapper-item-list'>
<ul className="list-group">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
</ul>
</div>
        )
    }

}