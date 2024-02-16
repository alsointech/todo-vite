import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let foo = [
    {
        id: 1,
        title: 'go to swim',
        completed: false
    },
    {
        id: 2,
        title: 'visit Grandma',
        completed: false
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

            <div className='input-task-box'>
                <input
                    value={bar}
                    type='text'
                    placeholder='what is pending ?'
                />
                <button
                    onClick={() => (setTasks((task) => (
                        [...task, { title: 'cualquier valor de tarea' }]
                    )))}>
                    create
                </button>
            </div >

            <div className='pending-tasks-box'>
                <h2>pending tasks</h2>
                {tasks.map((task) => (
                    <div className='pending-task-box'>{task.title}</div>
                ))}
            </div>

            <div className='completed-tasks-box'>
                <h2>completed tasks</h2>
                {tasks.map((task) => (
                    <div className='completed-task-box'>{task.title}</div>
                ))}
            </div>
            
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
