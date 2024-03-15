import React from "react";

const WeatherInput = ({temperature, conditions}) => {
    return (
        <div>
            <p>Temperature: {temperature}<span style={{color: "red"}}></span></p>
            <p>Conditions: {conditions}</p>
        </div>
    );
}
export default WeatherInput;