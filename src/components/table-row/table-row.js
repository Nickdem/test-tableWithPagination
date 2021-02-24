import Cell from "../cell";

export default function TableRow({ values }) {
  return (
    <tr className="app__table-row">
      {values.map((item) => (
        <Cell
          key={typeof item === "string" ? item : item[0]}
          value={typeof item === "string" ? item : item[1]}
        />
      ))}
    </tr>
  );
}