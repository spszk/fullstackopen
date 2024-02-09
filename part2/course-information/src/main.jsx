import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'

// const promise = axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes); 
//   })
// // .then... is to access response

// const promise2 = axios
//   .get('http://localhost:3001/foobar')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)