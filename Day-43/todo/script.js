document.addEventListener("DOMContentLoaded",function(){
    const todoform = document.querySelector(".todo-form")
    const todoInput = document.querySelector(".todo-input")
    const todoSubmit = document.querySelector(".todo-submit")
    const todoList = document.querySelector(".todo-list")

    let editMode = false
    let editItem = null

    todoform.addEventListener("submit",function(e){
        e.preventDefault()
        const inputText = todoInput.value.trim()
        if(inputText !== ""){
          if(editMode){
            editItem.firstChild.textContent = inputText
            todoSubmit.innerText = "+Add"
            editItem=null
            editMode=false
          }else{
            addTodo(inputText)
          }
          todoInput.value =""
        }else{
            console.log("Please enter valid task")
        }
    })


    todoList.addEventListener("click" ,function(e){
        const target = e.target
        if(target.tagName === "BUTTON"){
            const todoItem = target.parentNode
            if(target.innerText === "❌"){
                 todoItem.remove()
            }else if(target.innerText === "✏️"){
                editMode= true
                editItem= todoItem
                todoSubmit.innerText = "Edit todo"
                todoInput.value = todoItem.firstChild.textContent
                todoInput.focus()
            }
               
        }

    })
    function addTodo(inputText){
        const todoItem = document.createElement("li")
        const editbutton = document.createElement("button")
        const deletebutton = document.createElement("button")

        todoItem.innerHTML = `<span>${inputText}</span?`
        editbutton.innerText = `✏️`
        deletebutton.innerText = `❌`
        
        todoItem.appendChild(editbutton)
        todoItem.appendChild(deletebutton)
        todoList.appendChild(todoItem)
    }
})