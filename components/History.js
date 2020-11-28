import React from "react"
import { connect } from "react-redux"
import { undo, redo } from "../redux/actions"

const History = ({ undo, redo }) => {
  return (
    <div>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  undo: () => dispatch(undo()),
  redo: () => dispatch(redo())
})
export default connect(null, mapDispatchToProps)(History)
