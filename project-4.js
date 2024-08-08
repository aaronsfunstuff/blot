const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const appleOutline = [
  [62.5, 100],
  [85, 80],
  [100, 50],
  [85, 20],
  [40, 20],
  [25, 50],
  [40, 80],
  [62.5, 100]
];

const appleSmile = [
  [50, 40],
  [55, 37.5],
  [70, 37.5],
  [75, 40]
];

const stem = [
  [58, 100],
  [62, 115],
  [67, 100]
];

const stemShading = [
  [60, 105],
  [64, 110],
  [66, 105]
];

const leftLeaf = [
  [45, 85],
  [30, 105],
  [50, 100],
  [45, 85]
];

const leftLeafVeins = [
  [40, 95],
  [35, 90],
  [45, 85],
  [30, 95],
  [45, 100]
];

const rightLeaf = [
  [80, 85],
  [95, 105],
  [75, 100],
  [80, 85]
];

const rightLeafVeins = [
  [85, 95],
  [90, 90],
  [80, 85],
  [95, 95],
  [80, 100]
];

const leftEye = [
  [50, 55],
  [45, 50],
  [55, 50],
  [55, 60],
  [45, 60],
  [45, 50]
];

const rightEye = [
  [75, 55],
  [70, 50],
  [80, 50],
  [80, 60],
  [70, 60],
  [70, 50]
];

finalLines.push(appleOutline);
finalLines.push(appleSmile);
finalLines.push(stem);
finalLines.push(stemShading);
finalLines.push(leftLeaf);
finalLines.push(leftLeafVeins);
finalLines.push(rightLeaf);
finalLines.push(rightLeafVeins);
finalLines.push(leftEye);
finalLines.push(rightEye);

drawLines(finalLines);
