import React, {Component} from 'react';
import './App.css'
import axios from 'axios';

class App extends Component {
  constructor() {
    super(); // Sets up the ability to make a component
    this.state = { //Our initial State
      title: "",
      artist: "",
      album: "",
      songs: []
    }
    this.handleTitleChange = this.handleTitleChange.bind(this); //Binding in the constructor gives us 
    this.handleArtistChange = this.handleArtistChange.bind(this);// A value for this. We don't have to do this
    this.handleAlbumChange = this.handleAlbumChange.bind(this);// If we use arrow functions for our methods
  }
  //Event Listeners
  handleTitleChange(e) {
    this.setState({title: e.target.value}); //Update the value of title in state
  }
  handleArtistChange(e) {
    this.setState({artist: e.target.value}); //Update the value of artist in state
  }
  handleAlbumChange(e) {
    this.setState({album: e.target.value}); //Update the value of album in state
  }

  handleClick = () => { //Runs when the button is clicked
    //make axios request to server
    axios.post('/api/song', { //We make a post request to our post endpoint
      title: this.state.title, //...and we send along this body...
      album: this.state.album, // ...We can access this in req.body
      artist: this.state.artist // We use body for large amounts of data as opposed to params or queries
    }).then(response => { //Once we get a response back from our server
      this.setState({songs: response.data}) // We update our songs in state. This causes a rerender and... 
    })                                      // ...updates our map down below
  }

  render() {
    const songs = this.state.songs.map(val => { //For each element in our songs array we create some JSX
      return <div>
        <h1>{val.title}</h1> {/* This is the title of the song */}
        <h2>{val.artist}</h2> {/* This is the name of the artist */}
      </div>
    })
    return (<div className='App'>
      <input placeholder="Song Title" onChange={this.handleTitleChange} /> 
      <input placeholder="Artist Name" onChange={this.handleArtistChange} /> 
      <input placeholder="Album Name" onChange={this.handleAlbumChange}/> 
      <button onClick={this.handleClick}>Add</button>
      {songs} {/* This is where we render the map we did above */}
    </div>)
  }
}

export default App;