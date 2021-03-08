//This is the version with the fixed method adding new item objects to the to-do list array instead of just replacing a property value

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

// "OnInit" means properties are rendered on initialization of app - capital T in "Todo" because its referencing the interface
//property name : data type

export class TodosComponent implements OnInit {
  title:string = "A place to store your Todos";
  
   //object -referencing the interface (Todo)
  newTaskInput:string=''; //user input
  searchWord:string = '' // seachword user input - to filter
  filterValue: string = '';
  

   public todos: Todo[] = [      
   {task:'fold clothes', completed:false},
   {task:'put clothes in dresser', completed:false},
   {task:'relax', completed:false},
   {task:'try to pet cat', completed:false},
   {task:'pet dog', completed:false},
   {task:'be awesome', completed:false},
];

filteredTodos: Todo[] = []; //we start out with this - but then ngOnInit reassigns the empty array to our array of tasks/todos above

  constructor() { }

//  could put a fuction in here (ngOnInit) and that is rendered on initialization (ng stands for angular)
  
ngOnInit() {

  this.filteredTodos = this.todos // reassigns empty array to the array list above
     // this.todos = [
    //   {task:'get food', completed:false},
    //   {task:'go to bed', completed:false},
    //   {task: 'wake up', completed: true},
    // - how Jacob did this at first - since ngOnInit loads on the page right away ];
}

 completeTask(todoItem: Todo){
  todoItem.completed = true;
};

 addTask(){
  let newTask={task:'', completed:false}; //new task object
   newTask.task = this.newTaskInput; // this reassigns the value of the task
   this.todos.push(newTask); //this pushes the new task into the todos array
   this.newTaskInput = ''; //this clears the input for the next thing to be entered
 };

//  filterTasks(): Todo[]{
//    //return our original todo array if theres no input in the filter tasks field. 
//    console.log('hit');
//   if(this.searchWord.length < 1){
//     return this.todos
//   }
//   console.log('hit');
//   return this.todos.filter(todo =>todo.task.includes((this.searchWord)));

//  }

//  removeTask(id:number){
//    this.todos = this.todos.filter((v, i) => i !==id); // id is index, v is value, if i is not equal to id, then we won't return it
//    //this is how I did it originally
//  }


   //this is how jacob did it - 
   filteredTasks(){
    this.filteredTodos = this.todos.filter(todo => todo.task.includes(this.filterValue));
  }


 //this is how Jacob did the remove method - it has index as the parameter (i) and labels it as a number
 //at this index in the todos array, we will splice(remove) the item at that index.
deleteTodo(i:number):void{
this.todos.splice(i,1);
this.filteredTodos = this.todos;
// this.filterValue = '';
}
 

// This is how Jacob added items to the bottom of the list array
// addTodo(){
//  const todoItem: Todod = {
//    task: this.taskName,
//    completed: false
//  }
//  this.todos.push(todoItem);
// }
  

}
