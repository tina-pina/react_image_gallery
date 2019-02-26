import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import ImageList from './Components/ImageList';
import Home from './Components/Home';
import Footer from './Components/Footer';


import {
  BrowserRouter,
  Route,
  Switch
}

  from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      imagesList: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  generateSearchTerm = () => {
    let searchTerms = ['cats', 'dogs', 'computers']
    let randomNum = Math.floor(Math.random() * 3)
    return searchTerms[randomNum];
  }

  performSearch = (searchTerm = this.generateSearchTerm()) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7a95085986cfa5e8dbd38965cb4f9dba&per_page=24&format=json&nojsoncallback=1&text=${searchTerm}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ imagesList: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    // console.log(this.state.imagesList);
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Switch>
            <Route exact path="/" component={Home} />
          </Switch> */}
          <SearchForm onSearch={this.performSearch} />
          <MainNav searchDefault={this.performSearch} />
          <ImageList imageList={this.state.imagesList} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
