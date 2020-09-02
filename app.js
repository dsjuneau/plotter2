import { drawGrid } from "./modules/drawgrid.js";
import { generateRandomSet } from "./modules/randomset.js";
import { cumulativeNumSet } from "./modules/cumulativeset.js";

const displaySet = document.getElementById("btn-2");
const generate = document.getElementById("btn-1");
const percent = document.getElementById("btn-3");
const txt1 = document.getElementById("txt-1");
const txt2 = document.getElementById("txt-2");
let canvas1 = document.getElementById("canvas-1");
let canvas2 = document.getElementById("canvas-2");
let c1 = canvas1.getContext("2d");
let c2 = canvas2.getContext("2d");
canvas1.width = 1200;
canvas1.height = 800;
canvas2.width = 1200;
canvas2.height = 800;

let randomSet;
let cumulativeSet;

drawGrid(c1);
drawGrid(c2);

generate.addEventListener("click", () => {
  const iterations = parseFloat(txt1.value);
  const flips = parseFloat(txt2.value);
  randomSet = generateRandomSet(flips, iterations, "coin", flips);
  txt1.value = "Done";
  txt2.value = "Done";
  console.log(randomSet);
});

displaySet.addEventListener("click", () => {
  cumulativeSet = cumulativeNumSet(randomSet);
  document.getElementById("output").innerHTML = cumulativeSet;
});

percent.addEventListener("click", () => {
  console.log(cumulativeSet.length);
  console.log(
    cumulativeSet[generateRandomSet(cumulativeSet.length, 1, "coin").indexOf(1)]
  );
});
