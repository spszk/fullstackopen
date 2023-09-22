//exercise 1.4

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        <li>{course.parts[0].name}: {course.parts[0].exercises}</li>
        <li>{course.parts[1].name}: {course.parts[1].exercises}</li>
        <li>{course.parts[2].name}: {course.parts[2].exercises}</li>
      </ul>
      <h4>Total hours: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</h4>
    </div>
  )
}

export default App