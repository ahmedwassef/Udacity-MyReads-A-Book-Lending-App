import React, {Component} from "react";
 

class BookActions extends Component {
      state = {
        book: this.props.book,
        selectedAction: this.props.book.shelf?this.props.book.shelf:'none',
      };
      
      handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.updateBook(this.state.book, event.target.value)
      };

    render() {
        return (
                <select  value={this.state.selectedAction} onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                </select>
        );
    }
}

export default BookActions;
