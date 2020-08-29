const displaySet = document.getElementById("btn-2");
const generate = document.getElementById("btn-1");
const percent = document.getElementById("btn-3");
const txt1 = document.getElementById("txt-1");
const txt2 = document.getElementById("txt-2");
let randomSet;
let cumulativeSet;

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

const generateRandomSet = (arrayLength, iterations, type, typeNumber) => {
  const numSet = [];
  numSet.length = arrayLength;
  numSet.fill(0);
  switch (type) {
    case "coin":
      for (i = 0; i < iterations; i++) {
        let count = 0;
        for (j = 0; j < arrayLength; j++) {
          let a = Math.floor(2 * Math.random());
          count = count + a;
        }
        numSet[count] = numSet[count] + 1;
      }

      break;
    case "dice":
      for (i = 0; i < iterations; i++) {
        let a = Math.floor(1000 * Math.random());
        numSet[a] = numSet[a] + 2;
      }
      break;
    default:
      throw new Error("Must pick an experiment type");
  }

  return numSet;
};

const cumulativeNumSet = (numSet) => {
  const bigSet = [0];
  for (i = 0; i < numSet.length; i++) {
    if (i === 0) {
      bigSet[i] = numSet[i];
    } else {
      bigSet[i] = bigSet[i - 1] + numSet[i];
    }
  }
  return bigSet;
};
