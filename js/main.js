const imgLampOff = document.getElementById("lamp");
const btnLamp = document.getElementById("btn-lamp");

console.log(imgLampOff);
console.log(btnLamp);

const imgLampOn = () => (imgLampOff.src = "./img/yellow_lamp.png");
// console.log(imgLampOn());

const btnLampChangeTxt = () =>
  (document.getElementById("btn-lamp").innerHTML = "Spegni");
// console.log(btnLampChangeTxt());

btnLamp.addEventListener("click", imgLampOn);
btnLamp.addEventListener("click", btnLampChangeTxt);

// function clickSwitch() {
//   if (btnLamp !== on) {
//     btnLamp.onclick = off;
//   }
//   return (btnLamp.onclick = on);
// }

// console.log(clickSwitch());
