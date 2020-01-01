import React, { useState } from 'react';
import './App.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

  function App() {
    const [todos, setTodos] = useState ([
                                             {
                                                 text:'Learn about React',
                                                 isCompleted: false
                                             },
                                             {
                                                 text:'Make a real cool app',
                                                 isCompleted: false
                                             },
                                             {
                                                 text:'Throw a party',
                                                 isCompleted: false
                                             }
                                             ]);

      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      }

      const completeTodo = index => {
          const updateTodos = [...todos].filter((todo, todoIndex) => todoIndex !== index);
          setTodos(updateTodos);
      }

        return (
            <div className="app">
                <div className="title">This is my To-Do App</div>
                <div className="todo-list">
                        {todos.map((todo,index) => (
                            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
                        ))}
                        <TodoForm addTodo={addTodo}/>
                </div>
            </div>
        )
}

export default App;
