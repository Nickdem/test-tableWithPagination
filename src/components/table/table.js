import Cell from "../cell";

export default function Table({ data, func }) {
    if (!data.length) return <p>Нет данных или совпадений!</p>

    return (
        <table border="1">
            <caption>Таблица комментариев</caption>
            <thead onClick={func}>
                <tr>
                    {Object.keys(data[0]).map(item => <Cell key={item} value={item} />)}
               </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <tr key={item.id}>
                                {Object.entries(item).map(itm => <Cell key={itm[0]} value={itm[1]} />)}
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}