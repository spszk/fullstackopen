import Course from './components/Course'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState('')
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const hook = () => {
    console.log('effect');
    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data)
    })
  }

  // effect runs after the component has been rendered
  // the second parameter specifies how often the effect is run
  //    []    only run along with the first render
  useEffect(hook, [])

  console.log('render', notes.length, 'notes');
  return <Course courses={courses} />
}

export default App