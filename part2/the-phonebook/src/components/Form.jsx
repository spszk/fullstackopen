import services from "../services"

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
        id: (parseInt(persons[persons.length - 1].id) + 1).toString(),
      }

      services
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }

    // change number
    const changeNumber = (props) => {
      console.log("change number", props)
    }

    // checks if name exists already 
    const checkName = (event) => {
      event.preventDefault()
      
      let i = 0
      
      while (i < persons.length) {
        if (persons[i].name === newName) {
          if (window.confirm(`Do you want to change ${newName}'s number?`)) {
            changeNumber(persons[i])
          }
          break
        } else {
          addPerson()
        }
        i++  
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