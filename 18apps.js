// el evento de submit del formulario, me permite poder trabajar con esa información
//van a haber dos funciones la primera es para agregarle el evento al formualrio para que se pueda extraer la información
// Otra función nos va a generar el texto
//otra nos generara los botones

//vamos a llamar el formulario

const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit",
   (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");

    const task = taskInput.value;
    console.log(task);

    if(task) {
        taskList.append(createTaskElement(task));
        taskInput.value= "";
    }
   

   });

   function createTaskElement(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
    return li;
  }
  
  function createButton(text, className) {
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;
  }

  // escuchando el evento sobre los iconos de borrar y editar
  taskList.addEventListener("click",
    (event) => { if(event.target.classList.contains("delete-btn"))
    
      {
        deleteTask(event.target.parentElement);
      } else if (event.target.classList.contains("edit-btn")){
            editTask(event.target.parentElement);
      }
  
    });
   
  //hacemos la función para poder borrar el elemento

  function deleteTask(taskItem){
    if (confirm("estás segura/seguro de borrar este elemento")){
        taskItem.remove();

    }
  }

  // tenemos que hacer una función para poder editar documentos

  function editTask(taskItem){   
    const newTask= prompt("edita la tarea:",taskItem.firstChild.textContent);
    if (newTask !== null){
      taskItem.firstChild.textContent=newTask;
    }

  }
  