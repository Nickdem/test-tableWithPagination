import { useState } from "react"

export default function Tbody({ item }) {
    const [itemBody, setItemBody] = useState(false)
    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.postId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td onClick={() => setItemBody(!itemBody)}>{itemBody ? item.body : item.body.slice(0, 30)}...</td>
        </tr>

    )
}