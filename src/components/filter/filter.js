export default function Filter({ change }) {
    return (
        <div className="app-filter">
            <label htmlFor="filter">Фильтр:</label>
            <input className="app-filter__input" onChange={change} id="filter" />
        </div>
    )
}