#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
      this.name = name;
    }
    fuelDeacrease() {
      let fuel = this.fuel - 25;
      this.fuel = fuel;
    }
    fuelIncrease() {
      this.fuel = 100
      
    }
  }
  class Oponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
      this.name = name;
    }
    fuelDeacrease() {
      let fuel = this.fuel - 25;
      this.fuel = fuel;
    }
    
  }
  
  let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.bold.yellow("Enter Your Name"),
  });
  
  let oponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: chalk.bold.yellow("Select your oponent:"),
    choices: ["Skeleton", "Assassin", "Zombie"],
  });
  
  let p1 = new Player(player.name);
  let o1 = new Oponent(oponent.select);
  
  
  
  do {
      if (oponent.select === "Skeleton") {
          let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.bold.yellow("Select your oponent:"),
            choices: ["Attack", "Drink Portion", "Run for your Life...."],
          });
           if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
               p1.fuelDeacrease()
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
               if (p1.fuel <= 0) {
                  console.log(chalk.bold.red("You loose ,Better luck next time!"))
                  process.exit()
               }
              }
              if (num <= 0) {
                o1.fuelDeacrease()
               console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
               console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
               if (o1.fuel <= 0) {
                  console.log(chalk.bold.green("You win"))
                  process.exit()
               }
              }
           }
        
           if (ask.opt === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health Portion Your Fuel Is ${p1.fuel}`))
  
            
           }
        
           if (ask.opt === "Run for your Life....") {
            console.log(chalk.bold.red("You loose ,Better luck next time!"))
            process.exit()
           }
        
        }
        if (oponent.select === "Assassin") {
          let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.bold.yellow("Select your oponent:"),
            choices: ["Attack", "Drink Portion", "Run for your Life...."],
          });
           if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
               p1.fuelDeacrease()
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
               if (p1.fuel <= 0) {
                  console.log(chalk.bold.red("You loose ,Better luck next time!"))
                  process.exit()
               }
              }
              if (num <= 0) {
                o1.fuelDeacrease()
               console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
               console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
               if (o1.fuel <= 0) {
                  console.log(chalk.bold.green("You win"))
                  process.exit()
               }
              }
           }
        
           if (ask.opt === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health Portion Your Fuel Is ${p1.fuel}`))
  
            
           }
        
           if (ask.opt === "Run for your Life....") {
            console.log(chalk.bold.red("You loose ,Better luck next time!"))
            process.exit()
           }
        
        }
        if (oponent.select === "Zombie") {
          let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.bold.yellow("Select your oponent:"),
            choices: ["Attack", "Drink Portion", "Run for your Life...."],
          });
           if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
               p1.fuelDeacrease()
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
               if (p1.fuel <= 0) {
                  console.log(chalk.bold.red("You loose ,Better luck next time!"))
                  process.exit()
               }
              }
              if (num <= 0) {
                o1.fuelDeacrease()
               console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
               console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
               if (o1.fuel <= 0) {
                  console.log(chalk.bold.green("You win"))
                  process.exit()
               }
              }
           }
        
           if (ask.opt === "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You drink Health Portion Your Fuel Is ${p1.fuel}`))
  
            
           }
        
           if (ask.opt === "Run for your Life....") {
            console.log(chalk.bold.red("You loose ,Better luck next time!"))
            process.exit()
           }
        
        }
  } while (true);
  
  