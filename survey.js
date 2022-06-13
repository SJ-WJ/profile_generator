const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  console.log(`Great to have you here ${answer1}`);

  rl.question('What do you like to do for fun? ', (answer2) => {
    console.log(`Wow ${answer2} that is super interesting`);

    rl.question('What type of music is your fav? ', (answer3) => {
      console.log(`${answer3} is a great genre`);

      rl.question('What is your favourite meal? ', (answer4) => {
        console.log(`Oh nice ${answer4} is my fav too`);

        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Oh ${answer5} sounds tasty`);

          rl.question('What is your favourite sport? ', (answer6) => {
            console.log(`Nice ${answer6} is super cool`);

            rl.question('What do you think you are special at? ', (answer7) => {
              console.log(`Sweet being special at ${answer7} is super cool`);

              rl.question('Want to see a summary of your new profile! ', () => {
                console.log(`Your name is ${answer1}. You like to do ${answer2} and you love to listen to ${answer3} Your favourite meal is ${answer4} and during this meal your fave dish is ${answer5}. You love to play ${answer6} and your super power is ${answer7}.`);

                rl.close();

              });
            });
          });
        });
      });
    });
  });
});