var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=NewYork'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=SanFransisco'>San Fransisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, United Kingdom</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
