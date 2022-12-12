const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :)\n", (name) => {
  console.log(`Thank you for the answer: ${name}`);
  rl.question("What's an activity you like doing?\n", (activity) => {
    console.log(`Thank you for the answer: ${activity}`);
    rl.question("What do you listen to while doing that?\n", (listen) => {
      console.log(`Thank you for the answer: ${listen}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (meal) => {
        console.log(`Thank you for the answer: ${meal}`);
        rl.question("What's your favourite thing to eat for that meal?\n", (food) => {
          console.log(`Thank you for the answer: ${food}`);
          rl.question("Which sport is your absolute favourite?\n", (sport) => {
            console.log(`Thank you for the answer: ${sport}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (superPower) => {
              console.log(`Thank you for the answer: ${superPower}`);
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}`);
            });
          });
        });
      });
    });
  });
});



