import "./book.scss";

function Book({ book }) {
  const identifier = {
    type: JSON.parse(book.industryIdentifiers)[0].type,
    value: JSON.parse(book.industryIdentifiers)[0].identifier,
  };
  return (
    <div className="book">
      <h2 className="book__title">{book.title}</h2>

      <div className="book__info">
        <p className="book__subtitle">Author:</p>
        <p className="book__text">
          {book.authors.map(
            (e, index) => `${index > 0 ? ", " : ""}${e.author.name}`,
          )}
        </p>

        <p className="book__subtitle">Categories:</p>
        <p className="book__text">
          {book.categories.map(
            (e, index) => `${index > 0 ? ", " : ""}${e.category.name}`,
          )}
        </p>

        <p className="book__subtitle">Page Count:</p>
        <p className="book__text">{book.pageCount || "Unknown"}</p>

        <p className="book__subtitle">
          {identifier.type === "OTHER"
            ? identifier.value.slice(0, identifier.value.indexOf(":"))
            : identifier.type.slice(0, 4)}
          :
        </p>
        <p className="book__text">
          {identifier.value.slice(
            identifier.value.indexOf(":") + 1,
            identifier.value.length,
          )}
        </p>

        <p className="book__subtitle">Publisher:</p>
        <p className="book__text">{book.publisher || "Unkonown"}</p>
      </div>

      <button onClick={() => console.log(book)} className="book__show-button">
        Show more information
      </button>
    </div>
  );
}

export default Book;
