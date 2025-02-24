export default function Input({ label, id, ...props }) {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id} {...props} required />
        </p>
    )
}
{/!*This will make the type configurable form outside making the input flexible*/}