var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="text-center">
      <h1 className="page-title">Examples</h1>
      <p>Here are a few locations to try out:</p>
      <ul className="list">
        <li>
          <Link to='/?location=NewYork'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=SanFransisco'>San Fransisco, CA</Link>
        </li>
        <li>
          <Link to='/?location=Austin'>Austin, TX</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, United Kingdom</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
