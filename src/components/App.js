import React from "react";
import "./../styles/App.css";
import WeatherInput from "./WeatherDisplay";

const input = { temperature: 25, conditions: "Sunny" };

const App = () => {
  return (
    <div>
      <WeatherInput input={input}/>
    </div>);
};

export default App;
