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
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.specialSymbol}</td>
        </tr>
    )
}

const History = (props) => {
    if (props.all < 1) {
      return (
        <div>
          no feedback given yet
        </div>
      )
    }
    return (
        
        <table>
            <tbody>
            <Statistics text="good" value={props.good} />
            <Statistics text="neutral" value={props.neutral} />
            <Statistics text="bad" value={props.bad} />
            <Statistics text="all" value={props.all} />
            <Statistics text="average" value={(props.good - props.bad) / (props.all)} />
            <Statistics text="positive" value={100 * (props.good / (props.all))} specialSymbol="%" />
            </tbody>
        </table>
    )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  /*
  const statistics = {
      good:     good
    , neutral:  neutral
    , bad:      bad
    , all:      good + neutral + bad

  }
  */

  const handleGoodClick = () => {
      setGood(good + 1)
      setAll(all + 1)
  }

  const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

  return (
    <div>
        <Header header="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />

        <Header header="statistics" /> 
        <History all={all} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)