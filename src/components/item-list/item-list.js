import React,{Component} from 'react';
import './item-list.css'

export default class ItemList extends Component{
    
    render(){
        return(
<div className = 'wapper-item-list'>
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
</ul>
</div>
        )
    }

}