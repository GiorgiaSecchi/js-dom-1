const imgLampOff = document.getElementById("lamp");
const btnLampOn = document.getElementById("btn-lamp");

console.log(imgLampOff);
console.log(btnLampOn);

const imgLampOn = () => (imgLampOff.src = "./img/yellow_lamp.png");
// console.log(imgLampOn());

btnLampOn.addEventListener("click", imgLampOn);

const btnLampOff = () =>
  (document.getElementById("btn-lamp").innerHTML = "Spegni");
// console.log(btnLampOff());

function clickSwitch() {
  btnLampOn.onclick = btnLampOff;
}
console.log(clickSwitch());
