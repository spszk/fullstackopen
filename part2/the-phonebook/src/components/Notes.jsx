const Notes = (props) => {
    const {persons} = props
    return (
        // <div>debug</div>
        <ul>
            {persons.map((p) =>
                <li key={p.id}>
                    {p.name}
                </li>
            )}
        </ul>
    )
}

export default Notes