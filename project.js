// Welcome to Blot!
// Check out this guide to learn how to program in Blot: https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const appleOutline = [
  [62.5, 10],  
  [85, 20],    
  [100, 50],   
  [85, 80],    
  [40, 80],   
  [25, 50],    
  [40, 20],    
  [62.5, 10]   
];


const stem = [
  [58, 10],  
  [62, -10], 
  [67, 10]  
];

const leftLeaf = [
  [45, 15], 
  [30, 0],  
  [50, 5],  
  [45, 15]   
];

const rightLeaf = [
  [80, 15],  
  [95, 0],  
  [75, 5],   
  [80, 15]  
];

finalLines.push(appleOutline);
finalLines.push(stem);
finalLines.push(leftLeaf);
finalLines.push(rightLeaf);

drawLines(finalLines);


