import React, { useReducer } from 'react';

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", likes: 0 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", likes: 0 },
  { id: 3, title: "1984", author: "George Orwell", likes: 0 },
];

const likesReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return state.map(book => 
        book.id === action.payload ? { ...book, likes: book.likes + 1 } : book
      );
    default:
      return state;
  }
};

const BookCard = ({ book, dispatch }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-4">{book.author}</p>
      <button 
        onClick={() => dispatch({ type: 'INCREMENT_LIKES', payload: book.id })}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Like ({book.likes})
      </button>
    </div>
  );
};

const BookList = () => {
  const [books, dispatch] = useReducer(likesReducer, initialBooks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map(book => (
        <BookCard key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default BookList;