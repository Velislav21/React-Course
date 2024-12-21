export default function TabButton({children, onSelect, ...props}) {

    return (
        <li>
            <button onClick={onSelect} {...props}>{children}</button>
        </li>
    )
}