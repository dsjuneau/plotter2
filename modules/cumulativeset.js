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
