import React, { Component, Fragment } from 'react';
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

class MainContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      searchTerm: '',
      results: [],
      pageNumber: 1,
      loading: false
    }
  }

  changeTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  changePage = (e) => {
    this.setState({
      pageNumber: e.target.value
    })
  }

  performSearch = (e) => {
    e.preventDefault()
    console.log('inside performSearch')
    this.setState({
      loading: true
    })
    fetch(`https://cors-anywhere.herokuapp.com/https://untitled-dy2nd6y6z06x.runkit.sh/search/${this.state.searchTerm}/${this.state.pageNumber}`)
    .then(resp => resp.json())
    .then(data => {
      if (data.work) {
      this.setState({
        results: data.work
      }, () => this.setState({
        loading: false
      }))
      } else {
        this.setState({
          results: "Your search returned no results."
        }, () => this.setState({
          loading: false
        }))
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div id="title">
          <h1>The Catalog</h1>
          <h5>Powered by Goodreads</h5>
        </div>
        <SearchBar searchTerm={this.state.searchTerm} changeTerm={this.changeTerm} performSearch={this.performSearch} changePage={this.changePage} />
        <ResultsList loadingStatus={this.state.loading} results={this.state.results} />
      </Fragment>
    )
  }
}

export default MainContainer;
