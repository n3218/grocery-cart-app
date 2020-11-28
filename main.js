import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./components/App"
import "./style.css"

import { createStore } from "redux"
import groceryCartReducer from "./redux/store"

const store = createStore(groceryCartReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
