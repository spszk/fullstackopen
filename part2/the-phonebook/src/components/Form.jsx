import services from "../services"

const Form = (props) => {
    const newName = props.newName
    const newNumber = props.newNumber
    const setNewName = props.setNewName
    const setNewNumber = props.setNewNumber
    const persons = props.persons
    const setPersons = props.setPersons
    const message = props.message
    const setMessage = props.setMessage

    // changes newName
    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    // adds person to phonebook
    const addPerson = () => {
      const personObject = {
        name: newName,
        number: newNumber,
        id: (parseInt(persons[persons.length - 1].id) + 1).toString(),
      }

      services
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setMessage(response.data.name + ' was added')
          setTimeout(() => {
            setMessage(null)},
            2500)
          setNewName('')
          setNewNumber('')
        })
    }

    // change number
    const changeNumber = (props) => {
      const changedObject = {
        id: props.id,
        name: props.name,
        number: newNumber
      }
      
      services
        .update(changedObject)
        .then((response) => {
          setPersons(persons.map((p) => p.id !== response.data.id ? p : changedObject))
          setMessage(response.data.name + "'s number was changed")
          setTimeout(() => {
            setMessage(null)},
            2500)
          setNewName('')
          setNewNumber('')
        })
    }

    // checks if name exists already 
    const checkName = (event) => {
      event.preventDefault()
      
      let i = 0
      let inPhonebook = false
      
      while (i < persons.length) {
        if (persons[i].name === newName) {
          inPhonebook = true
          break
        } else {
          inPhonebook = false
        }
        i++  
      }

      if (inPhonebook == true) {
        if (window.confirm(`Do you want to change ${newName}'s number?`)) {
          changeNumber(persons[i])
        }
      } else {
        addPerson()
      }
    }

    // changes newNumber
    const handleNumber = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={checkName}>
            {/* add person */}
            <div>name: <input
            placeholder='type...'
            value={newName}
            onChange={handleChange}
            /></div>
            {/* add number */}
            <div>number: <input
            placeholder='type...'
            value={newNumber}
            onChange={handleNumber}
            /></div>
            {/* submit */}
            <button type="submit">add</button>
        </form>
    )
}

export default Form