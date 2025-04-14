const tbody = document.querySelector("#tbody");
const addTodo = document.querySelector("#addTodo");
const todoInp = document.querySelector("#todoInp");

const showTodos = (arr) => {
  tbody.innerHTML = "";
  todos.forEach((item, index, arr) => {
    tbody.innerHTML += `    <tr class= "${
      item.isCompleted ? "completed" : "notCompleted"
    }">
          <td>${item.todo}</td>
          <td>
            <input type="checkbox" ${item.isCompleted ? "checked" : null}
            onchange = "setCompleted ('${item.id}')"/>
          </td>
          <td>
            <button onclick = "editTodo ('${item.id}')">edit</button>
            <button onclick= "deleteTodo ('${item.id}')">delete</button>
          </td>
        </tr>`;
  });
};

const todos = [
  { id: 0, todo: "Tekrar et", isCompleted: false },
  { id: 1, todo: "Tapsiriqlari yaz", isCompleted: false },
  { id: 2, todo: "Derse gel", isCompleted: true },
];

showTodos(todos);

const setCompleted = (id) => {
  todos.map((item) => {
    if (item.id == id) {
      item.isCompleted = !item.isCompleted;
    }
  });
  showTodos(todos);
};

const deleteTodo = (id) => {
  const isAgree = confirm("silmek istediyinize eminsiniz?");
  if (isAgree) {
    todos.forEach((item, index) => {
      if (item.id == id) {
        todos.splice(index, 1);
      }
    });
  }
  showTodos(todos);
};

const editTodo = (id) => {
  todos.map((item) => {
    if (item.id == id) {
      const newTodo = prompt("deyisdirin", item.todo);
      if (newTodo) {
        item.todo = newTodo;
        showTodos(todos);
      }
    }
  });
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    id: new Date().getTime(),
    todo: todoInp.value,
    isCompleted: false,
  };
  todos.unshift(newTodo);
  showTodos(todos);
  todoInp.value = "";
});
