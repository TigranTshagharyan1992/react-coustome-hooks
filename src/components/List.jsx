import React, {useEffect, useRef, useState} from 'react';

const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const parentRef = useRef();

        const getTodos = (page,limit) => {
            fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
                .then(response => response.json())
                .then(json => setTodos(json))
        }
        useEffect(()=> {
            getTodos(page,limit);
        },[])
    return (
        <div>
            {todos.map(todo => {
                    return (
                        <div style={{padding: 30, border: '2px solid black'}}>
                            <span>{todo.id} </span>
                            <span key={todo.id} > {todo.title}</span>
                        </div>
                    )
                }
            )}
            <div style={{height:20, background: 'green'}} />
        </div>
    );
};

export default List;