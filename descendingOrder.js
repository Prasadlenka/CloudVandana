const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements of the array : ', (input) => {
  
  const elements = input.split(',');

  
  const numbers = elements.map(element => parseFloat(element));

  
  numbers.sort((a, b) => b - a);

 
  console.log('Sorted array in descending order: ' + numbers.join(', '));

  rl.close();
});
