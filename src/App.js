import React, { useState } from 'react'
import From from './From'
import List from './List'
import shortid from 'shortid'


const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate()
      }
    ])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
    <h1>Todo App</h1>
    <From addTodo = {addTodo} />
    <List todos = {todos}
    deleteTodo = {deleteTodo} />
    
      </>
  ) 
}

export default App