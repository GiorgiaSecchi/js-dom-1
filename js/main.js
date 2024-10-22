const imgLamp = document.getElementById("lamp");
const btnLamp = document.getElementById("btn-lamp");

console.log(imgLamp);
console.log(btnLamp);

// const imgLampOn = () => (imgLamp.src = "./img/yellow_lamp.png");
// // console.log(imgLampOn());

// const btnLampChangeTxt = () =>
//   (document.getElementById("btn-lamp").innerHTML = "Spegni");
// // console.log(btnLampChangeTxt());

// btnLamp.addEventListener("click", imgLampOn);
// btnLamp.addEventListener("click", btnLampChangeTxt);

//variabile booleana di partenza
let isLampOff = true;

const clickSwitch = () => {
  isLampOff = !isLampOff;

  //accendere
  if (isLampOff) {
    imgLamp.src = "./img/yellow_lamp.png";
    btnLamp.innerHTML = "Spegni";
    // spegnere
  } else {
    imgLamp.src = "./img/white_lamp.png";
    btnLamp.innerHTML = "Accendi";
  }
};

//ad ogni click che farò sul bottone si rievoca la funzione
btnLamp.addEventListener("click", clickSwitch);
