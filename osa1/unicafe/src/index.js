import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div><h1>{props.header}</h1></div>
    )
}

const Button = (props) => {
    console.log(props)
    const { handleClick, text } = props
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <Header header="give feedback" />
        <Button text="good" />
        <Button text="neutral" />
        <Button text="bad" />

        <Header header="statistics" />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)