import { useState } from 'react'

import Notes from './components/Notes'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 },
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
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