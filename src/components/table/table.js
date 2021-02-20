import TableRow from "../table-row";
// import Tbody from "./tbody";
// import Thead from "./thead";

export default function Table({ data, func }) {

    //console.log(Object.assign(...Object.keys(data[0]).map(item => item = {[`${item}`]:item})));
    
    const head = Object.assign(...Object.keys(data[0]).map(item => item = {[`${item}`]:item}))

    return (
        <table border="1">
            <caption>Таблица комментариев</caption>
            <thead onClick={func}>
               <TableRow item={head} />
            </thead>
            <tbody>
                {data.map(item => (<TableRow key={item.id} item={item} />))}
            </tbody>
        </table>
    )
}