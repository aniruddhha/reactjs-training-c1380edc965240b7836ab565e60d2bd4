export function DataTable() {

    const items = [
        { item: 'abc', price: 456, quantity: 12 },
        { item: 'pqr', price: 142, quantity: 450 },
        { item: 'xyz', price: 712, quantity: 1450 },
        { item: 'lmn', price: 78, quantity: 3000 },
    ]

    return (
        <table class="table container">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Abc</td>
                    <td>23</td>
                    <td>153</td>
                    <td> 1313 </td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
    )
}