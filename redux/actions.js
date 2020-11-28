export const UNDO = "UNDO"
export const REDO = "REDO"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const undo = () => {
  return { type: UNDO }
}
export const redo = () => {
  return { type: REDO }
}
export const addToCart = item => {
  return { type: ADD_TO_CART, item }
}
export const removeFromCart = index => ({ type: REMOVE_FROM_CART, index })
