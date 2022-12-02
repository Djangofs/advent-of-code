import * as fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8");

const splitData = data.split("\n\n").map((i) => i.split("\n"));

const totalCalories = splitData.map((elf) =>
  elf.reduce((a, b) => Number(a) + Number(b), 0)
);

const maxCalories = Math.max(...totalCalories);

console.log(maxCalories);

// 71023
