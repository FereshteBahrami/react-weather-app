import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsuis");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showcelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }
  function farenheit() {
    return (props.celsuis * 9) / 5 + 32;
  }

  if (unit === "celsuis") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsuis)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showcelsuis}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
