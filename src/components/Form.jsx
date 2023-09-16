import { useState } from 'react'

const Form = ({ addItem }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(text)
    setText('')
  }
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        id="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  )
}
export default Form
