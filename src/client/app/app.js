import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getStarships, getData, getStarshipname, error } from './action.js';
import { Link } from 'react-router-dom'
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import Gist from './links.js'
// // import { Home } from './home.js';

const mapStatetoProps = function (state) {
  return {
    starships: state.starships,
    fetch: state.fetch,
    error: state.error
  }
}

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(getStarships())
  }

  render() {
    return <div>
      <ul>
        {this.props.starships.map((starship) => {
          return <nav key={starship.release_date}>
            <Link to={`/gist/${starship.director}`}  >{starship.title}</Link>
          </nav>
        })}
      </ul>
    </div>
  }
}

// class Gist extends React.Component {
//   render() {
//     return <div>{this.props.starships.filter((starship) => {
//       if (starship.title == this.props.name)
//         return <h1>{starship.director}</h1>
//     })}
//     </div>
//   }
// }

export default connect(mapStatetoProps)(App, Gist)