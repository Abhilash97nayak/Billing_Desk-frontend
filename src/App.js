import "./App.css";
import React from "react";
import Header from './components/header';
import Details from './components/Details';
import Bill from "./components/Bill";


function App() {
  

  return (
    <div  className="ui container">
      <Header></Header>
      <Details/>    
      <Bill/>
    </div>
  );
}

export default App;

