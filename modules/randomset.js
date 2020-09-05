export const generateRandomSet = (
  arrayLength,
  iterations,
  type,
  typeNumber
) => {
  const numSet = [];
  numSet.length = arrayLength;
  numSet.fill(0);
  switch (type) {
    case "coin":
      for (let i = 0; i < iterations; i++) {
        let count = 0;
        for (let j = 0; j < arrayLength; j++) {
          let a = Math.floor(2 * Math.random());
          count = count + a;
        }
        numSet[count] = numSet[count] + 1;
      }

      break;
    case "dice":
      for (let i = 0; i < iterations; i++) {
        let a = Math.floor(1000 * Math.random());
        numSet[a] = numSet[a] + 2;
      }
      break;
    default:
      throw new Error("Must pick an experiment type");
  }

  return numSet;
};

export const trimRSet = (rSet) => {
  let newSet = [];
  for (let i = 0; i < rSet.length; i++) {
    if (rSet[i] !== 0) {
      newSet.push(rSet[i]);
    }
  }

  return newSet;
};

export const generateRandomNumber = (flips) => {
  let count = 0;
  for (let i = 0; i < flips; i++) {
    let a = Math.floor(2 * Math.random());
    count = count + a;
  }
  return count;
};
