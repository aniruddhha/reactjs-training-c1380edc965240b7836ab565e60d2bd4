import PropTypes from 'prop-types';
import { useState } from 'react'

export function InvoiceRow({ sr = 0, item = 'abc', price = 0, quantity = 0, onDelete }) {
    return (
        <tr>
            <th scope="row">{sr}</th>
            <td>{item}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> {price * quantity}</td>
            <td><a href="#" onClick={() => onDelete(sr - 1)}>❌</a></td>
        </tr>
    )
}
InvoiceRow.propType = {
    item: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onDelete: PropTypes.func
}

export function DataTable() {

    const onDeleteInvoice = (sr) => console.log(`Invoice Deleted ${sr}`)

    const items = [
        { item: 'abc', price: 456, quantity: 12 },
        { item: 'pqr', price: 142, quantity: 450 },
        { item: 'xyz', price: 712, quantity: 1450 },
        { item: 'lmn', price: 78, quantity: 3000 },
    ]

    const rows = items.map(
        (itm, index) => (
            <InvoiceRow
                key={index}
                sr={index + 1}
                item={itm.item}
                price={itm.price}
                quantity={itm.quantity}
                onDelete={onDeleteInvoice}
            />
        )
    )

    return (
        <table className="table container">
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
                {rows}
            </tbody>
        </table>
    )
}