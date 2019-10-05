import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div><h1>{props.header}</h1></div>
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
      code here
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)