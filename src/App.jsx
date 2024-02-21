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
    }
]

let bar = ''

const Tasks = (task) => {
    if (item.completed) {
        return <div>helloxx</div>
    }
}

/* return (
    <div className={task.completed ? 'completed' : 'pending'}>
        <input type="checkbox"
            checked={task.completed} />
        {task.title}
        <button className='destroy'></button>
    </div>
) */



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

            <div>
                {/* {foo.map(task)} */}
            </div>
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
                {tasks.map((task) => (
                    <div className='task-box pending'>
                        <input type="checkbox"
                            checked={task.completed} />
                        {task.title}
                        <button className='destroy'></button>
                    </div>
                ))}
            </div>

            <div className='completed-tasks-box'>
                <h2>Completed tasks</h2>
                {tasks.map((task) => (
                    <div className='task-box completed'>
                        <input type="checkbox"
                            checked={task.completed} />
                        {task.title}
                        <button className='destroy'></button>
                    </div>
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
