import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const TodoList = useSelector(selectTodoList)
  return (
    <div className="App">
        <div className="app__container">
          <div className="app__todoContainer">
            {
              TodoList.map(item => (
                <todoItem 
                name={item.item}
                done={item.done}
                id={item.id}
                 />

))
            }
        </div>

        <Input />
        </div>
        
    </div>
  );
}

export default App;
