// select the input box from ids

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todoList =document.getElementById('todoList'); 

// step:1 create a redux store

const store = Redux.createStore(reducer);

// step: 4 
store.subscribe(() =>{
  const html = store.getState().map(data => `<li><input type="checkbox">${data.text}</li>`).join('');
  todoList.innerHTML = html;
}
)

//step 2: defined reducer  function 

function reducer(state = [], action){
  switch(action.type){
    case "ADD_TODOS":
      return [...state].concat(action.data);
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

//step3: dispatch msg
addBtn.addEventListener('click', addTodos);

// let nextTodoId = 0
// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })
