import { useState, useEffect } from 'react'

import Notes from './components/Notes'
import Form from './components/Form'
import Filter from './components/Filter'
import noteService from './services'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error...')

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  return (
    <div>
      <h1>Phonebook</h1>
      {/* adds notification */}
      <Notification message={errorMessage} />
      {/* filter */}
      <Filter setFilterName={setFilterName} />
      {/* add new contacts */}
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} message={errorMessage} setMessage={setErrorMessage} />
      {/* show list */}
      <h2>Numbers</h2>
      <Notes persons={persons} setPersons={setPersons} filter={filterName} message={errorMessage} setMessage={setErrorMessage} />
    </div>
  )
}

export default App