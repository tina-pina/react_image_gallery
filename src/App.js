import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NotFound from './Components/NotFound';


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
      imagesList: [],
      loading: false
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
    this.setState({ loading: true });
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7a95085986cfa5e8dbd38965cb4f9dba&per_page=24&format=json&nojsoncallback=1&text=${searchTerm}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ imagesList: responseData.photos.photo, loading: false });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <div className="App backgroundHeader">
          <Header />
          <Switch>
            <Route exact path="/"
              render={() => <Home 
                onSearch={this.performSearch}
                searchDefault={this.performSearch}
                imageList={this.state.imagesList}
                isLoading={this.state.loading}
              />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
