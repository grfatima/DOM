const daireler = document.getElementsByClassName("circle");

for (let reng of daireler) {
  const rengAdlari = reng.innerText;

  reng.onclick = () => {
    document.body.style.backgroundColor = rengAdlari;
  };
}
