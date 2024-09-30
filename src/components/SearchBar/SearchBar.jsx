import s from "./SearchBat.module.css";
const SearchBar = ({ setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      return;
    }
    setQuery(query);
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
      />
      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
