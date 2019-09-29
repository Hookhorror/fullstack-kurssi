import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>
        {props.courseName}
      </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  const t = props.parts
  return (
    <div>
      <p>
        <Part part={t[0].name} exercises={t[0].exercises} />
        <Part part={t[1].name} exercises={t[1].exercises} />
        <Part part={t[2].name} exercises={t[2].exercises} />
      </p>
    </div>
  )
}

const Total = (props) => {
  const t = props.parts
  return (
    <div>
      <p>
        Number of exercises {t[0].exercises + t[1].exercises + t[2].exercises}
      </p>
    </div>
  )
}

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

      <Header courseName={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
