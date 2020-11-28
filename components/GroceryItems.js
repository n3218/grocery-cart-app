import React from "react"
import { connect } from "react-redux"
import { addToCart as addToCartAction } from "../redux/actions"

const GroceryItems = ({ items, addToCart }) => {
  return (
    <div className="grocery-items">
      <h1>Grocery Items</h1>
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
                <button onClick={() => addToCart(item)}>add to cart</button>
              </td>
              <td>{item.price}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({ items: state.items })
const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCartAction(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems)
