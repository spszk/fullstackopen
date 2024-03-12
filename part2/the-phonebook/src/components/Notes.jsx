import services from '../services'

const Notes = (props) => {
    const persons = props.persons
    const filter = props.filter
    const setPersons = props.setPersons
    const message = props.message
    const setMessage = props.setMessage

    // deletes contact
    const handleDelete = (name, id) => {
        if (window.confirm(`Do you really want to delete ${name} from your phonebook?`)) {
            services
                .delete(id)
                .then(() => {
                    setPersons(persons.filter((p) => p.id !== id))
                    setMessage(name + ' was deleted')
                    setTimeout(() => {
                        setMessage(null)},
                        2500)
                            })
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
                } else if (filter.toLowerCase() === match.toLowerCase()) {
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