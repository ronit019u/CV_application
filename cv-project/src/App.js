import React, { Component } from "react";
import Personal from "./components/Personal";
import Qualification from "./components/Qualification";
import Experience from "./components/Experience";

 class App extends Component {
  render() {
    return (
      <div>
        <Personal />
        <Qualification />
        <Experience />
      </div>
    )
  }
 }

export default App;