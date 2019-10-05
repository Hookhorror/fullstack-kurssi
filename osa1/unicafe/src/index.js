import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div><h1>{props.header}</h1></div>
    )
}

const Button = (props) => {
    const { onClick, text } = props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

  return (
    <div>
        <Header header="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />

        <Header header="statistics" />
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)