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
    <div>
      <ButtonLine click={() => props.setGood(props.good + 1, "Good")} text="Good" />
      <ButtonLine click={() => props.setNeutral(props.neutral + 1, "Neutral")} text="Neutral" />
      <ButtonLine click={() => props.setBad(props.bad + 1, "Bad")} text="Bad" />
    </div>
  )
}

const ButtonLine = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
  )
}

const StatsHeader = () => <div><h2>Statistics</h2></div>

const Statistics = (props) => {
  const sum = props.bad + props.good + props.neutral

  if (props.bad === 0 && props.good === 0 && props.neutral === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <div>
        <StatisticLine value={props.good} text="Good" />
        <StatisticLine value={props.neutral} text="Neutral" />
        <StatisticLine value={props.bad} text="Bad" />
        <StatisticLine value={sum} text="Total" />
        <StatisticLine value={sum/3} text="Average" />
        <StatisticLine value={(100 * props.good) / sum} text="Positive" pc="%" />
      </div>
    )
  }
}

const StatisticLine = (props) => <div>{props.text}: {props.value}{props.pc}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setValue = (n, t) => {
    if (t === "Good") setGood(n)
    if (t === "Neutral") setNeutral(n)
    if (t === "Bad") setBad(n)
  }

  return (
    <div>
      <Header />
      <Button good={good} setGood={(n, t) => setValue(n, t)}
        neutral={neutral} setNeutral={(n, t) => setValue(n, t)}
        bad={bad} setBad={(n, t) => setValue(n, t)} />
      <StatsHeader />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App