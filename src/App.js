import React, { Component } from 'react';

import './App.css';

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=5011d1c4&s=avengers') // Call the fetch function passing the url of the API as a parameter


    
.then((res) => {
console.log(res);

    // Your code for handling the data you get from the API
})
.catch((err) => {
  console.error(err);
  
    // This is where you run code if the server returns any errors
});
  }


  render() {
    return (
      <div className="container">
        <div className="wrapper-search">
          <div className="row mt-5">
            <div className="col">
              <h1>WPU Movie Database</h1>
            </div>
          </div>
          <div className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
          </div>

        <div className="row movie-container">

        </div>
      </div>
    )
  }
}
