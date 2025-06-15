import inquirer from 'inquirer';
import chalk from 'chalk';
import { addTask, listTasks, completeTask } from './taskManager.js';

console.log(chalk.greenBright("\n🚀 Welcome to Terminal Task Manager!\n"));

async function main() {
  while (true) {
    const { command } = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Choose a command:',
        choices: ['add-task', 'list-tasks', 'complete-task', 'exit']
      }
    ]);

    if (command === 'add-task') {
      const answers = await inquirer.prompt([
        { name: 'title', message: 'Task title:' },
        { name: 'dueDate', message: 'Due date (e.g., 2025-06-30):' }
      ]);
      try {
        addTask(answers.title, answers.dueDate);
      } catch (err) {
        console.error(chalk.red(err.message));
      }
    }

    if (command === 'list-tasks') {
      listTasks();
    }

    if (command === 'complete-task') {
      const { identifier } = await inquirer.prompt([
        { name: 'identifier', message: 'Enter task ID or title to complete:' }
      ]);
      completeTask(identifier);
    }

    if (command === 'exit') {
      console.log(chalk.blueBright("\n👋 Goodbye!\n"));
      break;
    }
  }
}

main();
