import React from "react";

const WeatherInput = ({temperature, conditions}) => {
    return (
        <div>
            <p>Temperature: <span style={{color: "red"}}>{temperature}</span></p>
            <p>Conditions: {conditions}</p>
        </div>
    );
}
export default WeatherInput;