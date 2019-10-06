import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Votes = (props) => {
  return (
    <div>
      has {props.amount} votes
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  
  const handleNextAnecdoteClick = (props) => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
    console.log(random)
  }

  const handleVoteClick = (props) => {
    
  }

  

  
  return (
      
    <div>
      {props.anecdotes.phrases[selected]}
      <Votes amount={props.anecdotes.votes[selected]} />
      {'has ', props.anecdotes.votes[selected], ' votes'}
      <br></br>
      <button onClick={handleNextAnecdoteClick}>
          next anecdote
      </button>
      <button onClick={handleVoteClick} >
          vote
      </button>
    </div>
  )
}

const anecdotes = {
    phrases: [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  , votes: [0,0,0,0,0,0]
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)