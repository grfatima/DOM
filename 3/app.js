const accordion = document.querySelector("h1");

const menu = document.getElementById("telebeler");

let isShow = true;

const accordionMenu = () => {
  if (isShow) {
    accordion.innerText = "FS37 <";
    menu.style.visibility = "visible";
  } else {
    accordion.innerText = "FS37 >";
    menu.style.visibility = "hidden";
  }
};

accordionMenu();

accordion.onclick = () => {
  isShow = !isShow;
  accordionMenu();
};
