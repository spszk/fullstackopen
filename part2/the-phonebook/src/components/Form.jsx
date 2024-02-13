import axios from "axios"

const Form = (props) => {
    const newName = props.newName
    const newNumber = props.newNumber
    const setNewName = props.setNewName
    const setNewNumber = props.setNewNumber
    const persons = props.persons
    const setPersons = props.setPersons

    // changes newName
    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    // adds person to phonebook
    const addPerson = () => {
      const personObject = {
        name: newName,
        number: newNumber,
        // same: false,
        id: (persons.length + 1).toString(),
      }

      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }

    // checks if name exists already 
    const checkName = (event) => {
      event.preventDefault()
      let isInPhonebook = false
      for (let i = 0; i < persons.length; i++) {
        if (newName === persons[i].name) {
          isInPhonebook = true
        }
      }
      if (isInPhonebook === true) alert(newName + ' is already in phonebook')
      else addPerson()
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