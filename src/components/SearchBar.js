import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <form className="search">
          <input onChange={this.props.changeTerm} placeholder="Search books by title, author, or ISBN" />
            <button onClick={this.props.performSearch}>Search</button>
        </form>
      </Fragment>
    )
  }
}

export default SearchBar;
