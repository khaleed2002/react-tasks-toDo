import { useEffect, useState } from 'react'

const Task = ({ task, deleteItem, handleCheck }) => {
  const [isChecked, setIsChecked] = useState(task.checked)
  useEffect(() => {
    handleCheck(task.id, isChecked)
  }, [isChecked])
  const handleChecked = (e) => {
    setIsChecked(e.target.checked)
  }
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>
        {task.taskText}
      </p>
      <button className="btn remove-btn" onClick={() => deleteItem(task.id)}>
        delete
      </button>
    </div>
  )
}
export default Task
