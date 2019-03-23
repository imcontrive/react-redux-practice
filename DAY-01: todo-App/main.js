// select the input box from ids

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList'); 

// step:1 create a redux store

const store = Redux.createStore(reducer);

// step: 4 
store.subscribe(() =>{
  const html = store.getState()
  .map((data, i) => 
    `<li class="todo" id=${i}>
      <p><input type="checkbox" data-id=${i} class="toggleTodo" ${data.done ? 'checked' : ''}>${data.text}</p>
      <button class="delete">X</button>
    </li>`)
  .join('');
  todoList.innerHTML = html;
}
)

//step 2: defined reducer  function 

function reducer(state = [], action){
  switch(action.type){
    case "ADD_TODOS":
      return [...state].concat(action.data);
    
    case "DELETE_TODO": {
      const newTodoArr = [...state];
      newTodoArr.splice(action.id, 1);

      return newTodoArr
    }

    case "TOGGLE_TODO" : {
      const newTodoArr = [...state];
      newTodoArr[action.id].done = !newTodoArr[action.id].done;

      return newTodoArr;
    }
      
    default:
      return state;
  }
}
function addTodos(e){
  let todoText = input.value;
  input.value= "" ;
  console.log(todoText);
  store.dispatch({type: "ADD_TODOS", data: {
    id: 1,
    text: todoText,
    done: false
  }})
}

const deleteTodo = (e) => {
  if (e.target.classList.contains('delete')) {
    const { id } = e.target.parentElement;

    store.dispatch({
      type: "DELETE_TODO",
      id 
    })
  } else if(e.target.classList.contains('toggleTodo')) {
    const { id } = e.target.dataset;

    store.dispatch({
      type: "TOGGLE_TODO",
      id 
    })
  }
}

//step3: dispatch msg
addBtn.addEventListener('click', addTodos);

todoList.addEventListener('click', deleteTodo)

// let nextTodoId = 0
// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })
