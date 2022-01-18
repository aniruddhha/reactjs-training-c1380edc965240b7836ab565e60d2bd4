export function DataTable() {

    const handles = [
        { sr: 1, fst: 'abc', lst: 'pqr', hnd: '@abc' },
        { sr: 2, fst: 'lmn', lst: 'xyz', hnd: '@xyz' },
        { sr: 3, fst: 'klm', lst: 'vbc', hnd: '@bcx' }
    ]

    const rows = handles.map(hn => (
        <tr>
            <th scope="row">{hn.sr}</th>
            <td>{hn.fst}</td>
            <td>{hn.lst}</td>
            <td>{hn.hnd}</td>
            <td>❌</td>
        </tr>
    ))

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}