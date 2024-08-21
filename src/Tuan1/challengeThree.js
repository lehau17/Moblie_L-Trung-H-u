// coding challenge 3
// Function to calculate average score
const calculateAverage = (score1, score2, score3) =>
  (score1 + score2 + score3) / 3;

// Test data
const dolphinsScores = [96, 108, 89]; // Data 1
const koalasScores = [88, 91, 110]; // Data 1

// Calculate average scores
const dolphinsAverage = calculateAverage(...dolphinsScores);
const koalasAverage = calculateAverage(...koalasScores);

// Determine the winner
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas win with an average score of ${koalasAverage}`);
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`It's a draw with both teams scoring ${dolphinsAverage}`);
} else {
  console.log("No team wins the trophy");
}

// Bonus 1: Using Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calculateAverage(...dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverage(...koalasScoresBonus1);

if (
  dolphinsAverageBonus1 > koalasAverageBonus1 &&
  dolphinsAverageBonus1 >= 100
) {
  console.log(`Dolphins win with an average score of ${dolphinsAverageBonus1}`);
} else if (
  koalasAverageBonus1 > dolphinsAverageBonus1 &&
  koalasAverageBonus1 >= 100
) {
  console.log(`Koalas win with an average score of ${koalasAverageBonus1}`);
} else if (
  dolphinsAverageBonus1 === koalasAverageBonus1 &&
  dolphinsAverageBonus1 >= 100 &&
  koalasAverageBonus1 >= 100
) {
  console.log(`It's a draw with both teams scoring ${dolphinsAverageBonus1}`);
} else {
  console.log("No team wins the trophy");
}

// Bonus 2: Using Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calculateAverage(...dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverage(...koalasScoresBonus2);

if (
  dolphinsAverageBonus2 > koalasAverageBonus2 &&
  dolphinsAverageBonus2 >= 100
) {
  console.log(`Dolphins win with an average score of ${dolphinsAverageBonus2}`);
} else if (
  koalasAverageBonus2 > dolphinsAverageBonus2 &&
  koalasAverageBonus2 >= 100
) {
  console.log(`Koalas win with an average score of ${koalasAverageBonus2}`);
} else if (
  dolphinsAverageBonus2 === koalasAverageBonus2 &&
  dolphinsAverageBonus2 >= 100 &&
  koalasAverageBonus2 >= 100
) {
  console.log(`It's a draw with both teams scoring ${dolphinsAverageBonus2}`);
} else {
  console.log("No team wins the trophy");
}
