import React from "react"
import { connect } from "react-redux"
import { removeFromCart } from "../redux/actions"

const GroceryCart = ({ items, removeFromCart }) => {
  if (!items) {
    return "Your cart is empty."
  }
  const total = () => {
    return items.reduce((sum, item) => sum + item.price, 0)
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
                <button onClick={() => removeFromCart(i)}>remove from cart</button>
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
  removeFromCart: index => dispatch(removeFromCart(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart)
