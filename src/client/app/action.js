import fetch from 'isomorphic-fetch'

export const getStarships = () => {
    return(dispatch) => {
        dispatch(getData("Load Data"))
        fetch('http://swapi.co/api/films/')
        .then(response => response.json())
        .then((json) => {
            const {results} = json
            dispatch(getStarshipname(results))
        })
    }
}

export const getData = (loaddata) => {
    return{
        type: "DATA",
        loaddata: loaddata
    }
}

export const getStarshipname = (names) => {
    return{
        type: 'NAME',
        starshipname: names
    }
}

export const error = (err) => {
  return{
    type: 'ERROR',
    payload:err
  }
}
