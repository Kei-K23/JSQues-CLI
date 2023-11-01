#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
import inquirer from "inquirer";
import figlet from "figlet";
import { questions } from "./questions.js";

// init global player name, score
let playerName;
let score = 0;
const arrayToStoreAskedQuestions = [];

// sleep function
function sleep(ms = 2000) {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}

// intro section
async function welcome() {
  const welcomeMessage = chalkAnimation.rainbow(
    "\n🚀 Test your JavaScript knowledge and become JavaScript Rocket 🚀\n"
  );

  welcomeMessage.start();

  await sleep();

  welcomeMessage.stop();

  console.log(`How to play the ${chalk.bgCyan("Game")}
Just choose one answer base on your knowledge of JavaScript`);
}

// get name from user
async function getPlayerName() {
  const name = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "what is your name?",
    default() {
      return "e.g foo";
    },
  });

  playerName = name.player_name;
}

// get random number
function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

// compare array with object value
function compareObject(arr, obj) {
  for (const arrObj of arr) {
    if (arrObj.question === obj.question) {
      return true;
    }
  }
  return false;
}
function winner() {
  console.clear();
  return new Promise((resolve) => {
    figlet(`Congrats, ${playerName} 🎉👏🏻🎉`, (error, data) => {
      console.log(gradient.pastel.multiline(data) + "\n");
      console.log(
        chalk.green(
          `Keep learning programming and learn new things every day 🦾🦾🦾\n`
        )
      );
      resolve();
    });
  });
}

// check correct answer

async function checkCorrectAnswer(ans1, ans2) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep(1000);

  if (ans1 === ans2) {
    score += 1;
    if (score === 3) {
      console.clear();
      await winner();
      process.exit(0);
    } else {
      spinner.success({ text: `Correct answer: ${score}` });
      await askQuestion();
    }
  } else {
    spinner.error({
      text: `💀 You lost the game! 💀
Try again ⚔️`,
    });
    process.exit(1);
  }
}
async function askQuestion() {
  const que = questions[getRandomNumber(questions.length)];
  const isSameQuestion = compareObject(arrayToStoreAskedQuestions, que);
  if (isSameQuestion) {
    await askQuestion();
  } else {
    arrayToStoreAskedQuestions.push(que);
  }

  const answer = await inquirer.prompt({
    name: "question",
    type: "list",
    message: que.question,
    choices: que.options,
  });

  await checkCorrectAnswer(que.answer, answer.question);
}

// call process step by step
async function main() {
  console.clear();
  await welcome();
  await getPlayerName();
  await askQuestion();
}

main();
