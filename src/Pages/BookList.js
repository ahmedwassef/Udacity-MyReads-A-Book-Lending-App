import React, { Component } from "react";
import Book from "../Components/Book";
import BookShelf from "../Components/BookShelf";
import { Link } from "react-router-dom";
import { getAll, update } from '../Service/BooksAPI';
class BookList extends Component {
    
    state = {
        books: [],
        loading: true,
    };

    componentDidMount = () => {
        getAll().then(books => {
            this.setState({ books: books, loading: false });
        });
    };

    updateBook = (book, shelf) => {
        /**
         * calling the update API function to update serverside database
         */
        update(book, shelf);
        this.updateBooks(book, shelf);
    };

    updateBooks = (book, shelf) => {
        /**
         * update  this.state.books curent array with the updated book
         * then update states with the updated books
         **/ 
         let updatedBooks = this.state.books.map(b => b.id === book.id ? { ...b, shelf: shelf } : b);
       
        this.setState({
            books: updatedBooks,
        });
    };

    render() {
        return (
            <div className="App">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <BookShelf key='currentlyReading' title='Currently Reading' books={this.state.books.filter(book => book.shelf === 'currentlyReading')} loading={this.state.loading} updateBook={this.updateBook} />
                        <BookShelf key='wantToRead' title='Want to Read' books={this.state.books.filter(book => book.shelf === 'wantToRead')} loading={this.state.loading} updateBook={this.updateBook} />
                        <BookShelf key='read' title='Read' books={this.state.books.filter(book => book.shelf === 'read')} loading={this.state.loading} updateBook={this.updateBook} />
                    </div>

                    <div className="open-search">
                        <Link to="/search">
                            <button>Add a book</button>
                        </Link>
                    </div>
                </div>


            </div>
        );
    }
}

export default BookList;
