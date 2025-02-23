export default function ChangeStatusBtn({ id, onStatusChange }) {
    return (
        <button className="btn todo-btn" onClick={() => onStatusChange(id)}>Change status</button>
    )
}