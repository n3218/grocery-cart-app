import React, { Component } from "react"
import GroceryCart from "./GroceryCart"
import GroceryItems from "./GroceryItems"
import History from "./History"

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <History />
        <GroceryItems />
        <GroceryCart />
      </div>
    )
  }
}
