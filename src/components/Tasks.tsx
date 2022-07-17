import { PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number
  title: string
  isComplete: boolean
}
export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [id, setNewID] = useState(0)

  function handleCreateNewTask() {
    if (newTaskTitle !== '') {
      const newID = Math.floor(Math.random() * 10000) + 1
      setNewID(newID)

      const newTask = {
        id: id,
        title: newTaskTitle,
        isComplete: false
      }
      setTasks([...tasks, newTask])
    } else {
      alert('erro')
    }
  }

  function handleToggleTaskCompletion(id: number) {
    const taskCompleted = tasks.filter(task => {
      task.id === id &&
        (task.isComplete === false
          ? (task.isComplete = true)
          : (task.isComplete = false))
      return task
    })

    setTasks(taskCompleted)
  }

  function handleRemoveTask(id: number) {
    const tasksToDo = tasks.filter(tasks => {
      return tasks.id !== id
    })
    setTasks(tasksToDo)
  }

  return (
    <>
    <div className='bg-gray-700 '>
      <div className="max-w-[736px] flex justify-center items-center gap-8 bg-gray-700 m-auto z-50 ">
        <input
          placeholder="Adicionar novo todo"
          onChange={e => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
          className="py-4 px-4 bg-gray-500 text-white-200 rounded w-full -mt-8"
          type="text"
        />
        <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask} className="bg-blue-700 rounded flex flex-row justify-center items-center p-4 text-white-200  -mt-8">
          Criar{' '}
          <span className=" ml-2">
            {' '}
            <PlusCircle />{' '}
          </span>
        </button>
      </div>
      </div>
      <div className="bg-gray-700 h-32 flex items-start justify-start">
        <div className="w-[736px] flex items-start justify-between  mx-auto">
          <p className="text-blue-500 font-bold font-inter text-sm mt-20">
            Tarefas criadas{' '}
            <span className=" text-white-200 bg-gray-400 py-1 px-2 rounded-lg">
              {tasks.length}
            </span>
          </p>
          <p className="text-purple-500 font-bold font-inter text-sm mt-20">
            Concluida{' '}
            <span className=" text-white-200 bg-gray-400 py-1 px-2 rounded-lg">
              {tasks.length}
            </span>
          </p>
        </div>
        
      </div>
      <main className='bg-gray-700 h-[800px] flex items-start justify-center' >
        <div className='w-[736px] flex items-start justify-between  mx-auto '>
        <ul  className="w-full">
          {tasks.map(task => (
            <li key={task.id} className=" mb-4">
              <div className={task.isComplete ? ' line-through opacity-70 ' : ''}  >
                <div className='flex flex-row justify-between w-full bg-gray-800 rounded px-4 py-8' data-testid="task" >
                  <div className='flex flex-row gap-4'>
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p className=' text-white-500'>{task.title}</p>
                </div>
              
              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16} color={'#4EA8DE'}/>
              </button>
              </div>
              </div>
            </li>
          ))}
          
        </ul>
        </div>
      </main>
    </>
  )
}
