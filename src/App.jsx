import { useState } from 'react'
import clockIcon from './assets/clock.svg'
import './App.css'

let iterator = 0

const Tasks = ({
    tasks,
    completed,
    completedChange,
    deleted,
    deletedChange
}) => {

    /* states are:
    uncompleted visible
    uncompleted invisible

    completed visible
    completed invisible */

    return <div className='foo'>
        {tasks.map((task, index) => {
            // pending
            if (!completed && !task.completed && !deleted && task.visible) {
                // completed
                return <div key={index} className={`task-box ${completed ? 'completed' : ''}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => completedChange(task.id)}
                            disabled={deleted ? true : false}
                        />
                        {task.title}
                    </div>
                    <button
                        className={`${task.visible ? 'destroy' : 'recover'}`}
                        onClick={() => deletedChange(task.id)}
                    />
                </div>
            } else if (completed && task.completed && !deleted && task.visible) {
                // deleted
                return <div key={index} className={`task-box ${completed ? 'completed' : ''}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => completedChange(task.id)}
                            disabled={deleted ? true : false}
                        />
                        {task.title}
                    </div>
                    <button
                        className={`${task.visible ? 'destroy' : 'recover'}`}
                        onClick={() => deletedChange(task.id)}
                    />
                </div>
            } else if (deleted && !task.visible && (task.completed || !task.completed)) {
                return <div key={index} className={`task-box ${completed ? 'completed' : ''}`}>
                    <div>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => completedChange(task.id)}
                            disabled={deleted ? true : false}
                        />
                        {task.title}
                    </div>
                    <button
                        className={`${task.visible ? 'destroy' : 'recover'}`}
                        onClick={() => deletedChange(task.id)}
                    />
                </div>
            }

        }


        )}
    </div>
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
        setTasks(tasks.map((task => {
            if (task.id === taskId)
                return {
                    ...task,
                    completed: !task.completed
                }
        })))
    };

    const handleDeletedChange = (taskId) => {
        setTasks(tasks.map((task => {
            if (task.id === taskId)
                return {
                    ...task,
                    visible: !task.visible
                }
        })))
    };

    return (<>
        <header>
            <h1>Mis tareas</h1>
        </header>
        <nav>
            <a href="/" target="_blank">
                <img src={clockIcon} className="logo" alt="clock logo" />
            </a>
        </nav>
        <main>
            <article>
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

                    <Tasks
                        tasks={tasks}
                        completed={false}
                        completedChange={handleCompletedChange}
                        deleted={false}
                        deletedChange={handleDeletedChange}
                    />

                </div>

                <div className='completed-tasks-box'>

                    <h2>Completadas</h2>

                    <Tasks
                        tasks={tasks}
                        completed={true}
                        completedChange={handleCompletedChange}
                        deleted={false}
                        deletedChange={handleDeletedChange}
                    />

                </div>

                <div className='completed-tasks-box'>

                    <h2>Eliminadas</h2>

                    <Tasks
                        tasks={tasks}
                        completed={true}
                        completedChange={handleCompletedChange}
                        deleted={true}
                        deletedChange={handleDeletedChange}
                    />
                </div>
            </article >
            <aside>
                trash
            </aside>
        </main >
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
