import { Todo } from "../components/Todo";
import { todos } from "./db";
import { reload } from "./utils";

const main_box = document.querySelector('.main_box')
const form = document.forms.namedItem('add_task')

form.onsubmit = (e) =>{
    e.preventDefault();
const todo ={
    id : crypto.randomUUID(),
    isDone : false,
    time : new Date().toLocaleTimeString(),
    title : new FormData(form).get('title')
}
if(todo.title.length !==0) {
    todos.push(todo)
    reload(todos,main_box,Todo)
}
alert('zapolni')
}
reload(todos,main_box,Todo)
