const Notes = (props) => {
    const {persons} = props
    return (
        // <div>debug</div>
        <ul>
            {persons.map((p) =>
                <li key={p.id}>
                    {p.name} {p.number}
                </li>
            )}
        </ul>
    )
}

export default Notes