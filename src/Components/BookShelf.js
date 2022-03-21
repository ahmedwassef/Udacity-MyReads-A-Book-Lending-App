import React, { Component } from "react";
import Book from "./Book";
import Loader from "./Loader";
import NotFoundData from "./NotFoundData";

class BookShelf extends Component {
  render() {
    const { books, title, loading, updateBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="bookshelf-books">
            {books.length === 0 ? (
               <div>   <NotFoundData></NotFoundData> </div>
            ) : (
              <ol className="books-grid">
                {books.map((book) => (
                  <Book key={book.id} book={book} updateBook={updateBook} />
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default BookShelf;
