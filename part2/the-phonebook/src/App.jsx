import { useState } from 'react'

import Notes from './components/Notes'
import Form from './components/Form'
import Filter from './components/Filter'

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
  
  return (
    <div>
      <h1>Phonebook</h1>
      {/* filter */}
      <Filter setFilterName={setFilterName} />
      {/* add new contacts */}
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      {/* show list */}
      <h2>Numbers</h2>
      <Notes persons={persons} filter={filterName} />
    </div>
  )
}

export default App