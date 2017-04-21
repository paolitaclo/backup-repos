import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import LikeDislike from './components/like_dislike';
import MovieDetail from './components/movie_detail';
// import MovieInfo from './components/movie_info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: 'Smurfs: The Lost Village',
        type: 'PG 2017 - Fantasy/Adventure - 1h 31m',
        trailer: 'https://www.youtube.com/watch?v=5x6LiTq8Vik',
        raitings: [
          {
            source: 'IMDb',
            url: 'http://www.imdb.com/title/tt2398241/'
          },
          {
            source: 'Common Sense Media',
            url: 'https://www.commonsensemedia.org/movie-reviews/smurfs-the-lost-village'
          },
          {
            source: 'Metacritic',
            url: 'http://www.metacritic.com/movie/smurfs-the-lost-village'
          }
        ]
      },
      likeDislike: null
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MovieDetail movie={this.state.movie} LikeDislike={this.state.likeDislike}/>
      </div>
    );
  }
}

export default App;
