import PropTypes from 'prop-types';
import { useState } from 'react';

export function InvoiceRow({ sr = 0, item = 'test item', price = 10, quantity = 1, onDelete }) {
    return (
        <tr>
            <th scope="row">{sr}</th>
            <td>{item}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> {price * quantity} </td>
            <td><a href="#" onClick={() => onDelete(sr - 1)}>❌</a></td>
        </tr>
    )
}

// define the propTypes
InvoiceRow.InvoiceRow = {
    item: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onDelete: PropTypes.func
}

export function DataTable() {

    // initial data of the table
    let items = [
        { item: 'Samsung', price: 23400, quantity: 10 },
        { item: 'RedMI', price: 15000, quantity: 15 },
        { item: 'Nokia', price: 18000, quantity: 23 },
        { item: 'Sony', price: 25000, quantity: 14 },
        { item: 'Apple', price: 75000, quantity: 8 }
    ];

    // setting the data as a state
    let [listOfItems, setNewListOfItems] = useState(items);

    const onDeleteInvoiceRow = function (rowIndex) {
        // logic for deleting targetted row
        let updatedListOfItems = listOfItems.filter( (item, index) => { return index != rowIndex } )
        // use State to update te table contents
        setNewListOfItems(updatedListOfItems);
        console.log(`Deleted row index: ${rowIndex}`)
    }


    let rows = listOfItems.map(
        (item, index) =>
            <InvoiceRow
                key={index}
                sr={index + 1}
                item={item.item}
                price={item.price}
                quantity={item.quantity}
                onDelete={onDeleteInvoiceRow}
            />
    );

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