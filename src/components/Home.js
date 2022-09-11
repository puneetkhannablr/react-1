import "./styles/ExpenseItem.css";
import "../App.css";
import React, { Component } from "react";
import Sidebar from "./Sidebar";
function Home() {
  

    console.log("I was triggered during render");  
    return (
      <>
        <Sidebar className="sidebar" />
        <div> I am the App component </div>
    </>
    );
  }


  export default Home;
