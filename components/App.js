import React, { Component } from "react"
import GroceryCart from "./GroceryCart"
import GroceryItems from "./GroceryItems"

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <GroceryItems />
        <GroceryCart />
      </div>
    )
  }
}
