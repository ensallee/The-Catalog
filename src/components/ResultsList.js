import React, { Component, Fragment } from 'react';
import Book from './Book'

class ResultsList extends Component {
  render() {
    let books;
    if (this.props.results.length !== 0 && !Array.isArray(this.props.results) && this.props.results !== "Your search returned no results.") {
      books = <Book title={this.props.results.best_book.title} author={this.props.results.best_book.author.name} image={this.props.results.best_book.image_url} rating={this.props.results.average_rating} />
    } else if (this.props.results.length !==0 && Array.isArray(this.props.results)) {
      books = this.props.results.map(book => {
        return <Book title={book.best_book.title} author={book.best_book.author.name} image={book.best_book.image_url} rating={book.average_rating}/>
      })
    }
    return (
      <Fragment>
        <div className="centered">
          {this.props.loadingStatus === true ? <h4 className="centered-text">Loading...</h4> : null }
          {this.props.results.length !== 0 && this.props.loadingStatus === false ?
            <div>
              <h4 className="centered-text">Results:</h4>
              <div className="cards">{books}</div>
            </div> : null}
          {this.props.results === "Your search returned no results." ? <h4 className="centered-text">Your search returned no results.</h4> : null}
          {this.props.results.length === 0 && this.props.loadingStatus === false ? <h4 className="centered-text">There are no results yet.</h4> : null}
        </div>
      </Fragment>
    )
  }
}

export default ResultsList;
