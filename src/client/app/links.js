import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './app.js'

class Gist extends React.Component {
  render() {
      console.log(this.props.match)
    return <div>{this.props.match.params.director}
    <button><Link to = '/' component = {App}>Back</Link></button>
    </div>
  }
}

export default Gist