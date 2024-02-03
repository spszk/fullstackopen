import { useState } from 'react'

import Notes from './components/Notes'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 },
  ]) 
  const [newName, setNewName] = useState('')

  // adds person to phonebook
  const addPerson = () => {
    const personObject = {
      name: newName,
      id: persons.length,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkName}>
          name: <input
            placeholder='type...'
            value={newName}
            onChange={handleChange}
          />
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <Notes persons={persons} />
    </div>
  )
}

export default App