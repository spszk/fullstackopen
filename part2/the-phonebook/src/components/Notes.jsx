const Notes = (props) => {
    const persons = props.persons
    const filter = props.filter

    console.log(persons);

    return (
        <ul>
            {persons.map((p) => {
                const currentName = p.name
                let match = currentName.slice(0, filter.length)
                if (filter === "" || filter === " ") {
                    return (
                        <li key={p.id}>
                            {p.name} {p.number}
                        </li>
                    )
                } else if (filter === match.toLowerCase() || filter === match.toUpperCase()) {
                    return (
                        <li key={p.id}>
                        {p.name} {p.number}
                        </li>
                    )}
                }
            )}
        </ul>
    )
}

export default Notes