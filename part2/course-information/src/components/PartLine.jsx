const PartLine = (props) => {
    const parts = props.parts;
    return (
        <div>
            {parts.map(parts =>
                <li key={parts.id}>
                    {parts.name} {parts.exercises}
                </li>
            )}
        </div>
    )
}

export default PartLine