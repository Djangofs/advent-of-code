import * as fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8");

const splitData = data.split("\n\n").map((i) => i.split("\n"));

const totalCalories = splitData.map((elf) =>
  elf.reduce((a, b) => Number(a) + Number(b), 0)
);

// Part 1

const maxCalories = Math.max(...totalCalories);

console.log(maxCalories);
// 71023

// Part 2

const sortedCalories = totalCalories.sort((a, b) => b - a);
const top3Sum = sortedCalories.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(top3Sum);
// 206289
