import services from '../services'

const Notes = (props) => {
    const persons = props.persons
    const filter = props.filter

    const handleDelete = (name, id) => {
        const selectedPerson = id

        console.log(selectedPerson)

        if (window.confirm(`Do you really want to delete ${name} from your phonebook?`)) {
            services
                .delete(selectedPerson)
        }
    }

    return (
        <ul>
            {persons.map((p) => {
                const currentName = p.name
                let match = currentName.slice(0, filter.length)
                if (filter === "" || filter === " ") {
                    return (
                        <li key={p.id}>
                            {p.name} {p.number + " "} 
                            <button type="button" onClick={() => {handleDelete(p.name, p.id)}} >delete</button>
                        </li>
                    )
                } else if (filter === match.toLowerCase() || filter === match.toUpperCase()) {
                    return (
                        <li key={p.id}>
                            {p.name} {p.number + " "} 
                            <button type="button" onClick={() => {handleDelete(p.name, p.id)}} >delete</button>
                        </li>
                    )}
                }
            )}
        </ul>
    )
}

export default Notes