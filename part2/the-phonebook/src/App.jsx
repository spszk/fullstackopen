import { useState } from 'react'

import Notes from './components/Notes'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', same: false, id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', same: false, id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', same: false, id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', same: false, id: 3 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  // adds person to phonebook
  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
      same: false,
      id: persons.length,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // changes newName
  const handleChange = (event) => {
    setNewName(event.target.value)
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

  // change filterName
  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      {/* filter */}
      <div>filter by name: <input
        type="text"
        onChange={handleFilterName}
        />
      </div>
      <h2>Add new</h2>
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
      {/* show list */}
      <h2>Numbers</h2>
      <Notes persons={persons} filter={filterName} />
    </div>
  )
}

export default App