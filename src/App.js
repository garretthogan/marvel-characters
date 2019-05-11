import React, { Component } from 'react';
import {
  Card,
  CardMedia,
  CardHeader,
  AppBar,
  Toolbar,
  InputBase,
  Button,
  LinearProgress
} from '@material-ui/core';
import querystring from 'querystring';
import striptags from 'striptags';

const env = require('./env.json');

const API_URL = 'https://gateway.marvel.com/v1/public';

const OFFSET_INCREMENT = 20;

const getCharacters = query =>
  fetch(
    `${API_URL}/characters?${querystring.stringify({
      ...query,
      apikey: env.API_KEY
    })}`
  )
    .then(res => res.json())
    .then(res => ({ total: res.data.total, characters: res.data.results }));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: [],
      searchOffset: 0,
      total: 0
    };
  }

  onInput = event => {
    this.setState({ keyword: event.target.value });
  };

  search = () => {
    this.loadPage();
  };

  loadPage = (offset = 0) => {
    const { keyword } = this.state;

    this.setState(prevState => ({
      loading: true,
      searchOffset: offset
    }));

    getCharacters({ nameStartsWith: keyword, offset }).then(results => {
      this.setState({
        loading: false,
        searchResults: results.characters,
        total: results.total
      });
    });
  };

  getNextPage = () => {
    const { searchOffset } = this.state;
    const nextOffset = searchOffset + OFFSET_INCREMENT;
    this.loadPage(nextOffset);
  };

  getPreviousPage = () => {
    const { searchOffset } = this.state;
    const nextOffset = searchOffset - OFFSET_INCREMENT;

    this.loadPage(nextOffset);
  };

  render() {
    const { keyword, searchResults, total, searchOffset, loading } = this.state;

    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <div style={{ padding: 12, color: 'white' }}>
              <InputBase
                style={{ color: 'inherit' }}
                value={keyword}
                onChange={this.onInput}
                placeholder="Character..."
              />
            </div>
            <div style={{ width: '100%' }}>
              <Button
                style={{ float: 'right', color: 'inherit' }}
                onClick={this.search}
              >
                Search
              </Button>
            </div>
          </Toolbar>
          {loading && <LinearProgress color="secondary" />}
        </AppBar>
        <div>
          {searchResults.map((result, index) => (
            <div style={{ padding: 12 }} key={index}>
              <Card style={{ maxWidth: 400 }}>
                <CardMedia
                  style={{ height: 0, paddingTop: '56.25%' }}
                  image={`${result.thumbnail.path}.${
                    result.thumbnail.extension
                  }`}
                  title={result.name}
                />
                <CardHeader
                  title={result.name}
                  subheader={striptags(result.description)}
                />
              </Card>
            </div>
          ))}
        </div>
        <div>
          {searchOffset >= OFFSET_INCREMENT && (
            <button onClick={this.getPreviousPage}>Previous Page</button>
          )}
          {searchOffset < total - OFFSET_INCREMENT && (
            <button onClick={this.getNextPage}>Next Page</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
