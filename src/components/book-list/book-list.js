import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import './book-list.css';
import { withBookstoreService } from '../hoc';

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);
    }

    render () {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default withBookstoreService()(connect(mapStateToProps)(BookList));