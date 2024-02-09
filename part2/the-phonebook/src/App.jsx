import { useState, useEffect } from 'react'
import axios from 'axios'

import Notes from './components/Notes'
import Form from './components/Form'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  
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