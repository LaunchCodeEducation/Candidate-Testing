const input = require('readline-sync');
// ask for candidate name
// loop over questions
// ask user for answer (format answer)
// store answer in answers array 
// calculate overall grade
// display name and results of each question

let questions = [
"True or false: 5 kilometer == 5000 meters?",
"(5 + 3)/2 * 10 = ?",
'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
"Who was the first American woman in space?",
"What is the minimum crew size for the ISS?"
];

let key = ["true", "40", "Trajectory", "Sally Ride", "3"];
let answers = [];
let numCorrect = 0;

let candidateName = input.question("What is your name? ");

for (let i=0; i<questions.length; i++) {
  let answer = input.question(questions[i]);
  answers.push(answer);
}

console.log(`Candidate Name: ${candidateName}`);
for (let i=0; i<questions.length; i++) {
  if (answers[i].toLowerCase() === key[i].toLowerCase()) {
    numCorrect ++;
  }
  console.log(`${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${answers[i].toLowerCase()}`);
  console.log(`Correct Answer: ${key[i].toLowerCase()}`);
  console.log('\n');
}

let grade = (numCorrect / questions.length) * 100;
console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} correct) <<<`);
if (grade >= 80) {
  console.log(`>>> Status: PASSED <<<`);
} else {
  console.log(`>>> Status: FAILED <<<`);
}
