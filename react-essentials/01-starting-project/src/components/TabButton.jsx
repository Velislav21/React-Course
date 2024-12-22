export default function TabButton({children, onSelect, ...props}) {
    console.log(onSelect)
    return (
        <li>
            <button onClick={onSelect} {...props}>{children}</button>
        </li>
    )
}