import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './TodoItem.css'

const TodoItem = ({ name, done, id }) => {
    const handleCheck = () => {

    }
    return (
        <div>    
             <Checkbox
                checked={done}
                onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

             <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
