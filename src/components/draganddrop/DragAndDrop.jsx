import React, { useEffect, useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = () => {

    const [loading, setisLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    async function fetchListOfTodos() {
        try {
            setisLoading(true);
            const response = await fetch('https://dummyjson.com/todos?limit=5&skip=0');
            const data = await response.json();

            if (data && data.todos && data.todos.length > 0) {
                console.log(data.todos);
                setisLoading(false);
                const updatedTodos = data.todos.map((todoItem) => {
                    return { ...todoItem, status: 'wip' }
                })
                console.log(updatedTodos);
                setTodos(updatedTodos);
            }

        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchListOfTodos();
    }, []);

    function onDragStartTodo(event,id){
        console.log({event,id});
        event.dataTrasfer.setData('id',id);
        console.log({event,id});
    }

    function onDrop(){

    }

    function renderTodos() {
        const todosRenderList = {
            wip: [],
            completed: []
        }

        todos.length > 0 && todos.forEach((todoItem) => {
            todosRenderList[todoItem.status].push(
                <div key={todoItem.id} onDragStart={(event)=> onDragStartTodo(event,todoItem.id)} draggable className='todo-card'>
                    {todoItem.todo}
                </div>
            )
        })

        return todosRenderList;
    }


    if (loading) return <h1>Loading data! Please wait</h1>


    return (
        <div className="drag-and-drop-container">
            <h1>Drag and Drop</h1>
            <div className="drag-and-drop-board">
                <div onDrop={(event)=>onDrop(event,'wip')} onDragOver={(event)=>event.preventDefault()} className="work-in-progress">
                    <h3>In Progress</h3>
                    {renderTodos().wip}
                </div>
                <div onDrop={(event)=>onDrop(event,'completed')} className="completed">
                    <h3>Completed</h3>
                    {renderTodos().completed}
                </div>
            </div>
        </div>
    )
}

export default DragAndDrop
