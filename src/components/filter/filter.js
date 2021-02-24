export default function Filter({ change }) {
  return (
    <div className="app__filter center">
      <label className="app__filter-label" htmlFor="filter">
        Фильтр:
      </label>
      <input
        className="app__filter-input"
        onChange={change}
        id="filter"
        placeholder="Пиши здесь..."
        autoComplete="off"
      />
    </div>
  );
}
