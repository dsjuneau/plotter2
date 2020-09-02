export const cumulativeNumSet = (numSet) => {
  const bigSet = [0];
  for (let i = 0; i < numSet.length; i++) {
    if (i === 0) {
      bigSet[i] = numSet[i];
    } else {
      bigSet[i] = bigSet[i - 1] + numSet[i];
    }
  }
  return bigSet;
};

export const trimCSet = (cSet) => {
  let newSet = [];
  for (let i = 0; i < cSet.length; i++) {
    if (!(cSet[i] === 0 || cSet[i] === cSet.length)) {
      newSet.push(cSet[i]);
    }
  }
  newSet.push(cSet.length);
  return newSet;
};
