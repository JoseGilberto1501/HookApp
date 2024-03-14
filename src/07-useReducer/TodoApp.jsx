
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {

    const { todos,handleNewTodo,handleDeleteTodo,handleToggleTodo,allTodos,pendingTodos} = useTodo();    

  return (
    <>
        <h1>TodoApp: {allTodos} <small>, pendientes: {pendingTodos} </small> </h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                    />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>

                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>

        
    </>
  )
}
