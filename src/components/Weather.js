import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { useContext } from "react";
import "./weather.css";
import { ThemeContext } from "./AppContextProvider";
import Button from "./Button";
function Weather() {
  const val = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(val);
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "9286b547ac677704de8851b9cfd85943";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div
      className="weather"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "White" : "black",
      }}
    >
      <span className="title">Weather Forecast🌞</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>

        
      </form>
        
      <Button onClick={toggleTheme} btnText="Switch Modes" />  
      

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        
        <div>
          
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}

      
    </div>
  );
}

export default Weather;
