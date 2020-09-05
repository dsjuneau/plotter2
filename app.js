//Support modules
import { drawGrid } from "./modules/drawgrid.js";
import {
  generateRandomSet,
  trimRSet,
  generateRandomNumber,
} from "./modules/randomset.js";
import { cumulativeNumSet, trimCSet } from "./modules/cumulativeset.js";
import { plot, plot2 } from "./modules/plot.js";

//Dom connections
const displaySet = document.getElementById("btn-2");
const generate = document.getElementById("btn-1");
const percent = document.getElementById("btn-3");
const txt1 = document.getElementById("txt-1");
const txt2 = document.getElementById("txt-2");
const canvas1 = document.getElementById("canvas-1");
const canvas2 = document.getElementById("canvas-2");
const c1 = canvas1.getContext("2d");
const c2 = canvas2.getContext("2d");

//Variables that are passed between event listeners
let randomSet;
let cumulativeSet;

//Event listeners
generate.addEventListener("click", () => {
  const iterations = parseFloat(txt1.value);
  const flips = parseFloat(txt2.value);
  randomSet = generateRandomSet(flips, iterations, "coin", flips);
  txt1.value = "Done";
  txt2.value = "Done";
  displaySet.style.visibility = "visible";
});

displaySet.addEventListener("click", () => {
  let trimedCSet = [];
  let trimedRSet = [];
  trimedRSet = trimRSet(randomSet);
  document.getElementById(
    "output-1"
  ).innerHTML = `Length: ${trimedRSet.length} Set : ${trimedRSet}`;
  plot(trimedRSet, c1);
  cumulativeSet = cumulativeNumSet(randomSet);
  trimedCSet = trimCSet(cumulativeSet);
  document.getElementById(
    "output-2"
  ).innerHTML = `Length: ${trimedCSet.length} Set : ${trimedCSet}`;

  //plot(cumulativeSet, c2, 1);
});

percent.addEventListener("click", () => {
  console.log(cumulativeSet.length);
  console.log(cumulativeSet[generateRandomNumber(randomSet.length)]);
});

//Draws size Canvas and draw grid
canvas1.width = 1200;
canvas1.height = 800;
canvas2.width = 1200;
canvas2.height = 800;
drawGrid(c1);
drawGrid(c2);
