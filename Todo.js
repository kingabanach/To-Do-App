import React from 'react';

function Todo({todo, index, completeTodo}) {
    const {text} = todo;
    return (
        <div className="todo">{text}
        <div>
            <button className="complete-button" onClick={() => completeTodo(index)}>Complete</button>
        </div>
        </div>
    )
}

export default Todo;
