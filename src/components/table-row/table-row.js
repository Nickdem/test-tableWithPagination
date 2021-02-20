export default function TableRow({ item }) {
    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.postId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
        </tr>
    )
}