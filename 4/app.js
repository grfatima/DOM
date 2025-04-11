const inp = document.querySelector("#inp");
const form = document.querySelector("#form");
const box = document.querySelector("#box");

let number = "";

inp.addEventListener("input", (e) => {
  number = +e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  const msj = `${number} ededin faktoriali: <span class="result"> ${factorial} </span>`;
  box.innerHTML = msj;

  inp.value = "";
  inp.focus();
});
