//Here i will get the selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")


//Event listener

todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck); //i think we are choosing the list because of the child we will bed appending everytime we click the button
//^^^We add the event listener to the `todoList` to use event delegation, allowing us to manage all clicks on the todo items and their buttons with a single event listener.
//event delegation. By setting an event listener on their parent element, we can detect clicks on any of the child elements, including dynamically added ones
 filterOption.addEventListener("click", filterTodo) //We create a new button or select that we will access all the childs of todoList


//functions

function addtodo(event){
    //we used preventDefault because the page was refreshing everytime we clicked the button
    event.preventDefault(); 
   


    //Here we will create a div that i mentioned before in HTML the whole structure
    const todoDiv = document.createElement("div"); //so every time we clicked on the button a div will be created
    todoDiv.classList.add("todo") // Here i am adding class to the div we will create everytime we click on the button

    //creating the LI, every list
    const newTodo = document.createElement("li") // in the line above we created the div, here inside that div we will create each <LI>
    newTodo.innerText = todoInput.value; //Here we will have the value of whateber the user puts.
    newTodo.classList.add("todo-item"); //Here we are adding class to the list
    todoDiv.appendChild(newTodo) // we are sticking the li inside of the todoDiv, which is the div we are creating;

    //completed button
    const completedButton = document.createElement("button"); //Here we are creating the button that the list will have
    completedButton.innerHTML = "<i class=`fas fa-check`></i>" //Here we are adding the syle of the button
    completedButton.classList.add("complete-btn"); //Here we are adding the class complete-Btn to the button
    todoDiv.appendChild(completedButton) // Here we are appending the button to div


     //delete button
     const trashButton = document.createElement("button"); //Here we are creating the button that the list will have
     trashButton.innerHTML = "<i class=`fas fa-trash`></i>" //Here we are adding the syle of the button
     trashButton.classList.add("trash-btn"); //Here we are adding the class complete-Btn to the button
     todoDiv.appendChild(trashButton) // Here we are appending the button to div

     //Here we will append it to the list
     todoList.appendChild(todoDiv) //Here we just appending the child, which is todoDiv the new div we are creating  to todoList

     //Clear todo Input
     todoInput.value = "" //Here after the function already wprked, we will clear the input

}

function deleteCheck(e){
//     so basically with target we can get info of what we are clicking, so everytime we click on trash button we will get the class, and we set if the class that we clicked its === to "trash-btn" the if{} will occur? 
// and the way we are deleting the divs its because we are accesing the parent of the button, which is the whole div of that specific todo list?


   const item = e.target //This is whatever we are clicking will be inside of item
    //^^^e.target` refers to the element that was clicked. This will be the actual button (trash or complete button) that the user clicked on.
 
   
   //Delete todo
    //So in order to delete or marked as checked, we need to manipulate the parent, since we click a button and the button is a child, we need to weork on the div that contains all of the to do. thats why we use todo = item.parentEelement

   if(item.classList.contains('trash-btn')){ // item is e.target, which means we can know where the user clicks because of e.target, if user clicks on the trash button we can get the class thanks to e.target, for instance, if the item.classList === to "trash-btn" so basically if e.target.classLIst === "trash-Btn" we will want the next to happen. ///////////////////  `item.classList.contains('trash-btn')` checks if `'trash-btn'` is one of the classes on the element. - This method is more flexible because it doesn’t depend on the order of the classes.
    const todo = item.parentElement; //`item.parentElement` gets the parent element of the clicked item. In this case, the parent element is the `<div>` containing the entire to-do item (including the text and buttons). This parent `<div>` is what we want to remove from the DOM.
    todo.classList.add("fall")//Once the item has been remooved, it will show fall class, which is an animation. 
    todo.addEventListener("transitionend", function(){ //In this case, the `todo` variable represents the parent element of the clicked button (either the trash button or the complete button). The `todo.addEventListener` is used to add an event listener to this parent element for handling a CSS transition
        todo.remove() // //The `remove()` method is called on the parent element (`todo`). This removes the entire `<div>` from the DOM, effectively deleting the to-do item from the list.
    })

 }

   //Check mark
   if(item.classList.contains("complete-btn")){ //Same thing as delete, we are checkin with the e.target if the user clicks on the button and if that button contains the class of "check-btn" the if will occur
    const todo = item.parentElement;
    todo.classList.toggle("completed")
   }









//This is inside the function deleteCheck()
//what we are doing, we are storing e.target inside of item, item.parentElement we are accesing the div, 

                // <div class="todo">
                //     <li>
                //         <button>delete</button>
                //         <button>checked</button>
                //     </li>
                // </div>
}


function filterTodo(e){
    //e = event
    const todos = todoList.childNodes // Here i am geting the childs of todo list which are the todo list the we create everytime we click on the button
    todos.forEach(function(todo){ // since we are using node listing we are going to use for each, and we can loop trough each single todo
        switch(e.target.value){ //since we already are loopoing through each todo, every
            case "all":
                todo.style.display = `flex`;
             break;
            case "completed":
                if(todo.classList.contains("completed")){ //Here we will check the ones with the class of completed
                    todo.style.display = "flex" // here we will show the ones with the class completed
                }else{
                    todo.style.display = "none" //Here the one that domt have the class of completed, will not appear
                }

        }
    }) 
}
