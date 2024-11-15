import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {

  // console.log("from todoTable");
    return (
        <table className="table table-hover">
            <thead>
              <tr>
                <th scope='col'> Number </th>
                <th scope='col'> Task </th>
                <th scope='col'> Duration </th>
                <th scope='col'> Actions </th>
              </tr>
            </thead>
            <tbody>
              {props.todos.map((todo, index) => (
                <TodoRowItem
                    key={index}
                    rowNumber={index+1}
                    rowTask={todo.rowTask}
                    rowDuration={todo.rowDuration}
                    deleteTodoItem={props.deleteTodoItem}
                    index={index}
                />
              ))}
            </tbody>
        </table>
    );
}

export default TodoTable;