import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let iterator = 0

const Tasks = ({ tasks, keyWord, completedChange }) => {


    return <>
        {tasks.map((task, index) => (
            task.completed === keyWord && <div key={index} className={`task-box ${keyWord ? 'completed' : ''}`}>
                <div>
                    <input
                        type="checkbox"
                        checked={keyWord}
                        // checked=completed
                        onChange={() => completedChange(task.id)}
                    // disabled={completed ? true : ''}
                    />
                    {task.title}
                </div>
                <button
                    className='destroy'

                />
            </div>
        ))}
    </>
}

function App() {

    // handle task object state 
    const [tasks, setTasks] = useState([])

    const [title, setTitle] = useState('')

    const handleInputValue = (event) => {
        event.preventDefault()
        setTitle('')
    }


    const handleCompletedChange = (taskId) => {
        setTasks([
            ...tasks,
            tasks.map(task => task.id === taskId ? task.completed = !task.completed : task)
        ])
    };

    return (
        <>
            <div>
                <a href="/" target="_blank">
                    <img src={clockIcon} className="logo" alt="clock logo" />
                </a>
            </div>

            <h1>Mi lista de tare</h1>

            <form className='' onSubmit={handleInputValue}>
                <input
                    value={title}
                    type='text'
                    placeholder="What is pending ?"
                    onChange={e => setTitle(e.target.value)}
                />
                <button
                    type='submit'
                    onSubmit={(e) => e.target.reset()}
                    onClick={() => {
                        setTasks([
                            ...tasks,
                            {
                                id: iterator++,
                                title: title,
                                completed: false
                            }]
                        )
                    }}>
                    Create
                </button>
            </form >

            <div className='pending-tasks-box'>
                <h2>Tareas pendientes</h2>

                <Tasks tasks={tasks} keyWord={false} completedChange={handleCompletedChange}></Tasks>

            </div>

            <div className='completed-tasks-box'>

                <h2>Tareas completadas</h2>

                <Tasks tasks={tasks} keyWord={true} completedChange={handleCompletedChange}></Tasks>

            </div>

            <p>Check <code> ipsum.dolor.sit </code>loremamet consectetur adipisicing elit.</p>

            <p className="read-the-docs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    )
}

export default App
