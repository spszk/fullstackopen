//exercise 1.4

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Content = (arr) => {
  //console.log(arr);
  return (
    <div>
      <ul>
        <li>{arr.parts[0].name}: {arr.parts[0].exercises}</li>
        <li>{arr.parts[1].name}: {arr.parts[1].exercises}</li>
        <li>{arr.parts[2].name}: {arr.parts[2].exercises}</li>
      </ul>
    </div>
  )
}

const Total = (props) => {
  let tot = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <div>
      Total hours: {tot}
    </div>
  )
}

//main
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App