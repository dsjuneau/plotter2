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
  let newSet = cSet.filter((e) => !(e === 0 || e === cSet.length));
  newSet.push(cSet.length);
  return newSet;
};
