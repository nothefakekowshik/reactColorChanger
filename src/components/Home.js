import React, { Component } from 'react'

export class home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color : ""
      }
    }
    redColor = ()=>
    {
        this.setState((prevState)=>
        {
            return {color : "red"}
        })
    }
    greenColor = () =>
    {
        this.setState(()=>
        {
            return {color : "green"}
        })
    }
    blackColor = () =>
    {
        this.setState(()=>{
            return {color : "black"}
        })
    }
    yellowColor = () =>
    {
        this.setState(()=>{
            return {color : "yellow"}
        })
    }
  render() {
    return (
      <div style={{backgroundColor : this.state.color}}>
        <p>Background color : {this.state.color}</p>
        <button onClick={this.redColor}>Red</button>
        <button onClick={this.greenColor}>Green</button>
        <button onClick={this.blackColor}>Black</button>
        <button onClick={this.yellowColor}>Yellow</button>
      </div>
    )
  }
}

export default home