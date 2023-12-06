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
        console.log(`Completing todo with ID ${id} and completed: ${completed}`);
        return instance.put(`todos/${id}`, { completed: completed })
          .then(response => {
            console.log('Complete todo response:', response.data);
            return response.data;
          })
          .catch(error => {
            console.error('Error completing todo:', error);
            throw error;
          });
      },
};

export default TodoRequests;