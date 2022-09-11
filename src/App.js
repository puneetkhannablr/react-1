import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Sidebar from "./components/Sidebar";
import React from "react";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Components from "./components/Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const expenses = [
  {
    title: "IELTS",
    cost: "123",
    date: new Date(2020, 7, 6),
  },
  {
    title: "Mac",
    cost: "12553",
    date: new Date(2022, 4, 6),
  },
  {
    title: "Title3",
    cost: "1264543",
    date: new Date(2022, 5, 10),
  },
];
function Application() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route exact path="/home" element={
              <Home />
            } />
            {/* <Route exact path="/components" render={() => <Components />}>
              <Components />
            </Route>
            <Route exact path="/stats" render={() => <Stats />}>
              <Stats />
            </Route> */}
          </Routes>
        {/* </Sidebar> */}
      </Router>
    </div>
  );
}

export default Application;
