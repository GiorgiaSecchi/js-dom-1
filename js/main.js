const imgLampOff = document.getElementById("lamp");
const btnLampOff = document.getElementById("btn-lamp");
console.log(imgLampOff);
console.log(btnLampOff);

const imgLampOn = () => (imgLampOff.src = "./img/yellow_lamp.png");
// console.log(imgLampOn());

btnLampOff.addEventListener("click", imgLampOn);
