import * as fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8");

const splitData = data.split("\n").map((i) => i.split(" "));

// Part 1

const calculateScore = (opponent: string, you: string): number => {
  let score = 0;
  // Selected score
  if (you === "X") score += 1;
  if (you === "Y") score += 2;
  if (you === "Z") score += 3;

  // Comparison score
  // 6 for win
  // 3 for draw

  if (you === "X") {
    if (opponent === "A") score += 3;
    if (opponent === "B") score += 0;
    if (opponent === "C") score += 6;
  }
  if (you === "Y") {
    if (opponent === "A") score += 6;
    if (opponent === "B") score += 3;
    if (opponent === "C") score += 0;
  }
  if (you === "Z") {
    if (opponent === "A") score += 0;
    if (opponent === "B") score += 6;
    if (opponent === "C") score += 3;
  }

  return score;
};

// total score
const score = splitData.reduce(
  (acc, item) => calculateScore(item[0], item[1]) + acc,
  0
);

console.log(score);

// Part 2
// X = Lose
// Y = Draw
// Z = Win

const calculateScore2 = (opponent: string, you: string): number => {
  let score = 0;

  if (you === "X") score += 0;
  if (you === "Y") score += 3;
  if (you === "Z") score += 6;

  if (you === "X") {
    if (opponent === "A") score += 3;
    if (opponent === "B") score += 1;
    if (opponent === "C") score += 2;
  }
  if (you === "Y") {
    if (opponent === "A") score += 1;
    if (opponent === "B") score += 2;
    if (opponent === "C") score += 3;
  }
  if (you === "Z") {
    if (opponent === "A") score += 2;
    if (opponent === "B") score += 3;
    if (opponent === "C") score += 1;
  }

  return score;
};

// total score
const score2 = splitData.reduce(
  (acc, item) => calculateScore2(item[0], item[1]) + acc,
  0
);

console.log(score2);
