var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built with React. Find the current weather temperature in any city.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="blank">React</a> - JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="blank">Open Weather Map</a> - API used to seach for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
