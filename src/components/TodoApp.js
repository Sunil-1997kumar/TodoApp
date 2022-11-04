import { useState } from "react";


const TodoApp = () => {

    const [currentTodo, setCurrentTodo] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(undefined);

    const handleOnChangeInput = (event) => {
        setCurrentTodo(event.target.value);
    }

    const handleSubmit = () => {
        if (editIndex != undefined) {
            const newTodos = allTodos.map((todo, index) => {
                if (index == editIndex) return currentTodo;
                return todo;
            })
            setAllTodos(newTodos);
            setCurrentTodo("")
            setEditIndex(undefined)

        } else {
            if (currentTodo.length > 0) {
                setAllTodos([...allTodos, currentTodo]);
                setCurrentTodo("");
            }
        }
    }

    const handleEdit = (index) => {
        setCurrentTodo(allTodos[index]);
        setEditIndex(index)
    }

    const handleDelete = (Eindex) => {
        const newTodos = allTodos.filter((todo, index) => index != Eindex);
        setAllTodos(newTodos);
    }

    return (
        <div style={{ marginTop: 50 }}>
            <h2>Todo App</h2>
            <div style={{ marginTop: 100, marginLeft: 200, marginRight: 200 }}>
                <input value={currentTodo} onChange={handleOnChangeInput} className="form-control" type="text" /><br />
                <button onClick={handleSubmit} className="btn btn-outline-primary">Submit</button>
            </div>
            <hr />
            <div style={{ marginLeft: 100, marginRight: 100 }}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sl NO</th>
                            <th scope="col">All Todos</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTodos.map((todo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{todo}</td>
                                        <td>
                                            <button onClick={() => { handleEdit(index) }} className="btn btn-outline-warning">Edit</button> &nbsp;
                                            <button onClick={() => { handleDelete(index) }} className="btn btn-outline-success">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoApp;