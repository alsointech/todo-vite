import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let foo = [
    {
        id: 1,
        title: 'go to swim',
        completed: true
    },
    {
        id: 2,
        title: 'visit Grandma',
        completed: false
    },
    {
        id: 3,
        title: 'soak the garden',
        completed: true
    },
    {
        id: 4,
        title: 'pet the cats',
        completed: false
    },
    {
        id: 4,
        title: 'finish react dinamyc task rendering',
        completed: true
    },
]

let bar = ''

const Tasks = ({ tasks, completed }) => {
    return <>
        {tasks.map((task, index) => (
            task.completed === completed && <div key={index} className={`task-box ${completed ? 'completed' : ''}`}>
                <div>
                    <input type="checkbox"
                        checked={completed} />
                    {task.title}
                </div>
                <button className='destroy'></button>
            </div>
        ))}
    </>
}

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

            <h1>Todo List</h1>

            <div className='input-task-box'>
                <input
                    value={bar}
                    type='text'
                    placeholder='What is pending ?'
                />
                <button
                    onClick={() => (setTasks((task) => (
                        [...task, { title: 'cualquier valor de tarea' }]
                    )))}>
                    Create
                </button>
            </div >

            <div className='pending-tasks-box'>
                <h2>Pending tasks</h2>

                <Tasks tasks={foo} completed={false}></Tasks>

            </div>

            <div className='completed-tasks-box'>

                <h2>Completed tasks</h2>

                <Tasks tasks={foo} completed={true}></Tasks>

            </div>

            <p>Check <code> ipsum.dolor.sit </code>loremamet consectetur adipisicing elit.</p>

            <p className="read-the-docs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    )
}

export default App
