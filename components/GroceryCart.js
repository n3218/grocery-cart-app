import React, { Component } from "react"
import { connect } from "react-redux"

const GroceryCart = ({ items, removeFromCart }) => {
  if (!items) {
    return "Your cart is empry."
  }
  const total = () => {
    items.reduce((sum, item) => sum + item.price, 0)
  }
  return (
    <div className="grocery-cart">
      <h1>Cart</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>Item Price</td>
            <td>Item Name</td>
          </tr>
          {items.map((item, i) => (
            <tr key={i}>
              <td>
                <button onClick={() => removeFromCart(item)}>remove from cart</button>
              </td>
              <td>{item.price}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${total()}</p>
    </div>
  )
}

const mapStateToProps = state => ({ items: state.cart })
const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch({ type: "REMOVE_FROM_CART", payload: item })
})
export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart)
