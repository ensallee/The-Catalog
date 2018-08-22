import React, { Component, Fragment } from 'react';
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

class MainContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      searchTerm: '',
      results: []
    }
  }

  changeTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  performSearch = (e) => {
    e.preventDefault()
    console.log('inside performSearch')
    fetch(`https://cors-anywhere.herokuapp.com/https://untitled-dy2nd6y6z06x.runkit.sh/search/${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      results: data.GoodreadsResponse.search.results.work
    }, () => console.log(this.state.results)))
  }

  render() {
    return (
      <Fragment>
        <div id="title">
          <h1>The Catalog</h1>
          <h5>Powered by Goodreads</h5>
        </div>
        <SearchBar searchTerm={this.state.searchTerm} changeTerm={this.changeTerm} performSearch={this.performSearch} />
        <ResultsList results={this.state.results} />
      </Fragment>
    )
  }
}

export default MainContainer;
