import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <form className="search">
          <div className="input-field">
          <input onChange={this.props.changeTerm} placeholder="Search books by title, author, or ISBN" />
          </div>
          <div className="input-field">
            <input onChange={this.props.changePage} placeholder="Which results page would you like to see? Enter a numeric value."/>
          </div>
            <button onClick={this.props.performSearch}>Search</button>
        </form>
      </Fragment>
    )
  }
}

export default SearchBar;
