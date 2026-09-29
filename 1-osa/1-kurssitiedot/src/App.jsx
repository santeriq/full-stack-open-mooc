

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </div>
  )
}

const Total = (props) => {
  
  let summa = 0;
  props.parts.forEach(value => {
    summa = summa + value.exercises;
  })
  
  return (
    <p>{summa}</p>
  )
}


const App = () => {
  
  const course = "Half Stack application development"
  const parts = [
  {
    name: "Fundamentals of React",
    exercises: 10
  },
  {
    name: "Using props to pass data",
    exercises: 7
  },
  {
    name: "State of a component",
    exercises: 14
  }
]

  return (
  <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </>
  )
}

export default App