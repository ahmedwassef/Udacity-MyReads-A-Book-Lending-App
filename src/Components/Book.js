import React, { Component } from "react";
import BookActions from "./BookActions";

class Book extends Component {

    render() {
        const { book ,updateBook} = this.props;
        return (
            <li >
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <BookActions book={book}  updateBook={updateBook} />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
            </li>
        );
    }
}

export default Book;
