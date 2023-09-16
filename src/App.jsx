import { useEffect, useState } from 'react'
import Form from './components/Form'
import Tasks from './components/Tasks'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid'

const App = () => {
  const [tasks, setTasks] = useState(
    (localStorage.getItem('tasks') &&
      JSON.parse(localStorage.getItem('tasks'))) ||
      []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addItem = (itemText) => {
    if (itemText.trim()) {
      const taskText = itemText.trim()
      const id = nanoid()
      setTasks((tasks) => [...tasks, { taskText, id, checked: false }])
      toast.success('task has been added!')
    } else {
      toast.error('please provide text value!')
    }
  }
  const deleteItem = (id) => {
    const NewTasks = tasks.filter((task) => task.id !== id)
    setTasks(NewTasks)
    localStorage.removeItem(id)
  }
  const handleCheck = (id, checked) => {
    const NewTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: checked }
      } else return task
    })
    setTasks(NewTasks)
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <h4>Tasks toDo</h4>
      <Form addItem={addItem} />
      <Tasks tasks={tasks} deleteItem={deleteItem} handleCheck={handleCheck} />
    </section>
  )
}

export default App
