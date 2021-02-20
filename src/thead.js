export default function Thead({foo}) {
    return (
        <thead>
            <tr onClick={foo}>
                <th>id</th>
                <th>post-id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
        </thead>
    )
}