import "./styles/ExpenseItem.css";
import "../App.css";
import React, { Component } from "react";
export default class Home extends Component {
  render() {
    console.log("I was triggered during render");
    return <div> I am the App component </div>;
  }
}
