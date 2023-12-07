import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
})

const TodoRequests = {
    getTodos(){
        return instance.get('todos').then(response=>response.data)
    },
    addTodo(text){
        return instance.post('todos', {
            text: text,
            completed: false,
        })
    },
    changeTodo(id, text){
        return instance.put('todos/'+id, {text: text})
    },
    deleteTodo(id){
        return instance.delete('todos/'+id)
    },
    completeTodo(id, completed) {
        return instance.patch(`todos/${id}`, { completed: completed })
    },
};

export default TodoRequests;
