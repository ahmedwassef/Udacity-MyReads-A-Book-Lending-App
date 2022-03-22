import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import Loader from "../Components/Loader";
import NotFoundData from "../Components/NotFoundData";
import { search, update ,getAll } from '../Service/BooksAPI';
 
class BookSearch extends Component {
   
    state = {
        query: '',
        loading: false,
        books: [],
        searchBooks: [],
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
        // update current book list from server after updates
        this.retrieveBooks();
    };

    bookSearch = (query) => {
        setTimeout(( ) => {
            search(query).then(books => {
                if (books.error) {
                    this.setState({ searchBooks: [], loading: false }); 
                    return ;
                } else {
                    const booksWithShelf = books.map((book) => {
                        const bookShelf = this.state.books.find((b) => b.id === book.id);
                        return { ...book, shelf: bookShelf ? bookShelf.shelf : 'none' };
                      });
                    this.setState({ searchBooks: booksWithShelf, loading: false });
                }
            });
        }, 1000);
      

    };

    retrieveBooks(){
        getAll().then(books => {
            this.setState({ books: books, loading: false });
        });
    }
    componentDidMount = () => {
       this.retrieveBooks();
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

                                this.state.searchBooks.length === 0 ? (
                                    <div>   <NotFoundData></NotFoundData> </div>
                                ) : (
                                    <ol className="books-grid">
                                        {this.state.searchBooks.map((book) => (
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
