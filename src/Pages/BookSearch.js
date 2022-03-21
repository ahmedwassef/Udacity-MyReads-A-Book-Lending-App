import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import Loader from "../Components/Loader";
import NotFoundData from "../Components/NotFoundData";
import { search, update } from '../Service/BooksAPI';
class BookSearch extends Component {
   
    state = {
        query: '',
        loading: false,
        books: [],
    };

    handleChange = event => {
        const query = event.target.value;
        this.setState({ query: query, loading: true });
        if(query){
            this.bookSearch(query);   
        }else{
            this.setState({ books: [], loading: false });
        }
    };
    updateBook = (book, shelf) => {
        /**
         * calling the update API function to update serverside database
         */
        update(book, shelf);

    };
    bookSearch = (query) => {
        search(query).then(books => {
            if (books.error) {
                this.setState({ books: [], loading: false });
            } else {
                this.setState({ books: books, loading: false });
            }
        });

    };

    render() {
        return (
            <div className="App">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/">
                            <button className="close-search" >

                                Close

                            </button>
                        </Link>
                        <div className="search-books-input-wrapper">

                            <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author" />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.state.loading ? (
                            <div>
                                <Loader />
                            </div>
                        )
                            :
                            (

                                this.state.books.length === 0 ? (
                                    <div>   <NotFoundData></NotFoundData> </div>
                                ) : (
                                    <ol className="books-grid">
                                        {this.state.books.map((book) => (
                                            <Book key={book.id} book={book} updateBook={this.updateBook} />
                                        ))}
                                    </ol>
                                )

                            )}
                    </div>
                </div>
            </div>
        );

    }
}

export default BookSearch;
