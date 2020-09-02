export const plot = (numSet, c, factor) => {
  let interval = Math.ceil(1100 / numSet.length);
  let addInterval = interval / 2;
  interval = interval * factor;

  const left = 600 + addInterval - (numSet.length / 2) * interval;
  for (let i = 0; i < numSet.length; i++) {
    c.beginPath();
    c.moveTo(left + addInterval, 750);
    c.lineTo(left + addInterval, 750 - numSet[i] * 7 * factor);
    c.strokeStyle = "blue";
    c.stroke();
    addInterval = addInterval + interval;
  }
};
