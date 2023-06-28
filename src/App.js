
function BookList() {
  // Array of books
  const books = [
    { title: 'The subtile art of not give a f', author: 'Mark Manson', genre: 'Self Help' },
    { title: 'Awareness', author: 'Anthony de Mello', genre: 'Self Help' },
    { title: 'Courage to be disliked', author: 'Japan Author', genre: 'Self Help' },
  ];
  
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default BookList;
