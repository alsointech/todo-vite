import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let foo = [
  {
    title: 'go to swim'
  },
  {
    title: 'visit Grandma'
  }
]

let bar = ''

function App() {

  // handle task object state 
  const [tasks, setTasks] = useState(foo)

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={clockIcon} className="logo" alt="clock logo" />
        </a>
      </div>
      <h1>todo list</h1>
      <div className='input-task'>
        <input
          value={bar}
          type='text'
          placeholder='what is pending ?'
        />
        {console.log(bar)}
        <button
          onClick={() => (setTasks((task) => (
            [...task, { title: 'cualquier valor de tarea' }]
          )))}>
          create
        </button>
      </div >
      <div className='pending-tasks-box'>
        {tasks.map((task) => (
          <div className='task-box'>{task.title}</div>
        ))}
      </div>
      <div className='completed-tasks-box'>completed tasks</div>
      <p>
        Check <code> ipsum.dolor.sit </code>loremamet consectetur adipisicing elit.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </>
  )
}

export default App
