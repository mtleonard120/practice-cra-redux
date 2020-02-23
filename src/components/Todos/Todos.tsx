import React, {useState} from 'react'

//redux
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, deleteTodo, todoList, toggleComplete} from 'store'

// styles
import styles from './Todos.module.scss'

// types
interface ITodosProps {}

// primary component
export const Todos: React.SFC<ITodosProps> = props => {
    const dispatch = useDispatch()
    const todos = useSelector(todoList)

    // local state
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(addTodo({label: inputValue}))
        setInputValue('')
    }

    return (
        <div>
            <h2>Todos Example</h2>

            <form>
                <input
                    type='text'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder='New Todo'
                />
                <span>
                    {' '}
                    <button type='submit' onClick={handleSubmit}>
                        Add Todo
                    </button>
                </span>
            </form>

            {todos.length > 0 && (
                <>
                    <h3>Current Todos</h3>
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>
                                <span className={todo.isComplete ? styles.complete : ''}>{todo.label}</span>
                                <span>
                                    {' '}
                                    <button onClick={() => dispatch(deleteTodo({id: todo.id}))}>X</button>
                                </span>
                                <span>
                                    {' '}
                                    <button onClick={() => dispatch(toggleComplete({id: todo.id}))}>
                                        {todo.isComplete ? 'Mark Incomplete' : 'Mark Complete'}
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
