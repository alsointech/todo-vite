import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let iterator = 0

const Tasks = ({
    tasks,
    completed,
    completedChange
}) => {


    return <>
        {tasks.map((task, index) => (
            task.completed === completed && <div key={index} className={`task-box ${completed ? 'completed' : ''}`}>
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        // checked=completed
                        onChange={() => completedChange(task.id)}
                    // disabled={completed ? true : ''}
                    />
                    {task.title}
                </div>
                <button
                    className={`${task.visible ? 'destroy' : 'recover'}`}
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

    const handleDeletedChange = (taskId) => {
        setTasks([
            ...tasks,
            tasks.map(task => task.id === taskId ? task.visible = !task.visible : task)
        ])
    };

    return (
        <>
            <nav>
                <a href="/" target="_blank">
                    <img src={clockIcon} className="logo" alt="clock logo" />
                </a>
                <h1>Mis tareas</h1>
            </nav>


            <form className='' onSubmit={handleInputValue}>
                <input
                    value={title}
                    type='text'
                    placeholder="Que tengo para hoy?"
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
                                completed: false,
                                visible: true
                            }]
                        )
                    }}>
                    Crear
                </button>
            </form >

            <div className='pending-tasks-box'>
                <h2>Pendientes</h2>

                <Tasks tasks={tasks} keyWord={false} completedChange={handleCompletedChange}></Tasks>

            </div>

            <div className='completed-tasks-box'>

                <h2>Completadas</h2>

                <Tasks tasks={tasks} keyWord={true} completedChange={handleCompletedChange}></Tasks>

            </div>

            <footer>
            <p>Check the &#32;
                <code>
                    <a href="http://github.com/afrancocedeno/todo-vite">
                        repository
                    </a>
                </code>
                &#32;and give me a star. ⭐</p>
                <p className="read-the-docs">© 2024 TambienLatino, Inc.</p>
            </footer>
        </>
    )
}

export default App
