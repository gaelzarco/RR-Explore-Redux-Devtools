import './App.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeOne, clearTodo } from './features/todoSlice'

const Todo = () => {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <h2 key={index} onClick={() => dispatch(removeOne(index))}>{item}</h2>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add To-do</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    )
}

export default Todo