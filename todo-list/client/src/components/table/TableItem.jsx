import ChangeStatusBtn from "./ChangeStatusBtn";
export default function TableItem({ _id, isCompleted, text, onStatusChange }) {
    const className = isCompleted ? 'todo is-completed' : 'todo';

    return (
        <tr className={className}>
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
            <td className="todo-action">
                <ChangeStatusBtn id={_id} onStatusChange={onStatusChange} />
            </td>
        </tr>
    )
}
