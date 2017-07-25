import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getStarships, getData, getStarshipname, error} from './action.js';

const mapStatetoProps = function (state){
  // console.log(state.starships)
    return{
      starships: state.starships,
      fetch: state.fetch,
      error: state.error      
    }
}

class App extends React.Component{

  componentWillMount(){
    this.props.dispatch(getStarships())
  }

  render(){
    return<div><ul>
      {this.props.starships.map((starship) => { return <li key = {starship.release_date}>{starship.title}</li>})}
      </ul>
    </div>
  }
}

export default connect(mapStatetoProps) (App)
