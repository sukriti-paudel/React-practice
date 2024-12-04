import { useContext } from "react";
import { createContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo message",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(ToDoContext)
}
export const TodoProvider = ToDoContext.Provider