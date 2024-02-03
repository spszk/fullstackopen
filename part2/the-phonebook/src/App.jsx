import { useState } from 'react'

import Notes from './components/Notes'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 0 },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // adds person to phonebook
  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkName}>
          <div>name: <input
            placeholder='type...'
            value={newName}
            onChange={handleChange}
          /></div>
          <div>number: <input
            placeholder='type...'
            value={newNumber}
            onChange={handleNumber}
          /></div>
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <Notes persons={persons} />
    </div>
  )
}

export default App