const button = document.getElementById("btn");

let mode = "light";
const modeButton = (mode) => {
  if (mode === "light") {
    button.innerText = "light";
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  } else if (mode === "dark") {
    button.innerText = "dark";
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  }
};

modeButton(mode);

button.onclick = () => {
  if (mode === "light") {
    mode = "dark";
  } else if (mode === "dark") {
    mode = "light";
  }
  modeButton(mode);
};
