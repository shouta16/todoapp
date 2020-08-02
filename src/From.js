import React, { useState } from 'react'



const From = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue('')
        
    }

        

    return (
        <form onSubmit = {handleSubmit}>
            <input 
            　　type='text'
            　　placeholder="Enter to add" 
            　　onChange = {e => {
                setValue(e.target.value) }}
                value= {value}
            />
        </form>
    )
}
export default From