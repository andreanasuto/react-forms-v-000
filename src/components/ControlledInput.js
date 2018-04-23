// Code ControlledInput Component Here
import React from 'react'
export default class ControlledInput extends React.Component {
  costrunctor() {
    super()

    this.value = {
      ''
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      })
  }
  render() {
    return (
      
    )
  }
}
