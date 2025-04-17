const counter = document.querySelector("#counter");
const artirBtn = document.querySelector("#artirBtn");
const azaltBtn = document.querySelector("#azaltBtn");

let say = 0;

counter.innerText = say;

artirBtn.addEventListener("click", () => {
  const art = () => {
    say++;
    counter.innerText = say;
  };

  art();
});

azaltBtn.addEventListener("click", () => {
  const azal = () => {
    if (counter.innerText == 0) {
    } else {
      say--;
    }

    counter.innerText = say;
  };
  azal();
});
