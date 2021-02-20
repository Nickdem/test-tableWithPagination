import TableRow from "../table-row";

export default function Table({ data, func }) {
    if (!data.length) return <p>Нет данных или совпадений!</p>

    return (
        <table border="1">
            <caption>Таблица комментариев</caption>
            <thead onClick={func}>
                <TableRow values={Object.keys(data[0])} />
            </thead>
            <tbody>
                {data.map(item => <TableRow key={item.id} values={Object.entries(item)} />)}
            </tbody>
        </table>
    )
}