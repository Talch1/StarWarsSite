import React, { Component } from "react";
import "./item-list.css";

import Spiner from "../spiner/spiner";

export default class ItemList extends Component {
  state = {
    itemlist: null,
  };

  componentDidMount() {
    const {getData} = this.props;
    getData().then((itemlist) => {
      this.setState({ itemlist });
    });
  }
  renderItems(arr) {


    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {

    const { itemlist } = this.state;

    if (!itemlist) {
      return <Spiner />;
    }
    const items = this.renderItems(itemlist);
    return (
      <div className="wapper-item-list">
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
