import Task from './Task'
const Tasks = ({ tasks, deleteItem, handleCheck }) => {
  return (
    <div className="items">
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
          />
        )
      })}
    </div>
  )
}
export default Tasks
