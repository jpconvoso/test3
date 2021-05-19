let arr = Array(1e8).fill("jignesh");
arr.sort();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
const calIntoGB = (used / 1024).toFixed(2);
console.log(`The script uses approximately ${calIntoGB} GB`);
