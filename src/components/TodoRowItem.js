function TodoRowItem(props) {

    // console.log("from todoRowItem");

    return (
        <tr>
            <th scope='row'> {props.rowNumber} </th>
            <td> {props.rowTask} </td>
            <td> {props.rowDuration} Minutes</td>
        </tr>
    )
}

export default TodoRowItem;