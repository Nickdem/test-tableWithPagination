import TableRow from "../table-row";

export default function Table({ data, func }) {
  if (!data.length) return <p>Нет данных или совпадений!</p>;

  return (
    <table className="app__table center" border="1">
      <caption className="app__table-caption">Таблица комментариев</caption>
      <thead className="app__table-head" onClick={func}>
        <TableRow values={Object.keys(data[0])} />
      </thead>
      <tbody className="app__table-body">
        {data.map((item) => (
          <TableRow key={item.id} values={Object.entries(item)} />
        ))}
      </tbody>
    </table>
  );
}