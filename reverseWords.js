const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", function(sentence) {
  const reversedWords = sentence.split(' ').map(word => reverseWord(word)).join(' ');
  console.log("Reversed Sentence: " + reversedWords);
  rl.close();
});

function reverseWord(word) {
  return word.split('').reverse().join('');
}