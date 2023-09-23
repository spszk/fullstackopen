import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h2>Give Feedback</h2>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const sum = props.bad + props.good + props.neutral

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {sum}</p>
      <p>Average: {sum/3}</p>
      <p>Positive: {(100 * props.good) / sum}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setValue = (n, t) => {
    if (t === "Good") setGood(n)
    if (t === "Neutral") setNeutral(n)
    if (t === "Bad") setBad(n)
  }

  console.log(good, neutral, bad)

  return (
    <div>
      <Header />
      <Button handleClick={() => setValue(good + 1, "Good")} text={"Good"} />
      <Button handleClick={() => setValue(neutral + 1, "Neutral")} text={"Neutral"} />
      <Button handleClick={() => setValue(bad + 1, "Bad")} text={"Bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App