import { useState, useEffect } from "react";
import TableItem from "./TableItem"
import Spinner from "../spinner/Spinner"
export default function Table() {

    const [todos, setTodos] = useState([]);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/todos')
            const todos = await response.json();
            setTodos(Object.values(todos));
            setIsPending(false);
        })()
    }, [])

    function changeStatusHandler(id) {
        setTodos(todos.map(todo => todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }
    return (
        <div className="table-wrapper">
            {isPending && <Spinner />}
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {todos.map(todo =>
                        <TableItem
                            key={todo._id}
                            {...todo}
                            onStatusChange={changeStatusHandler}
                            />)}

                </tbody>
            </table>
        </div>
    )
}