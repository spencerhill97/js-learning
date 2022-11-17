const readline = require('readline-sync');

const prompt = (message) => {
    console.log(`=> ${message}`);
}

prompt("Welcome to The Magic 8 Ball!");
prompt("What's your name?");
let name = readline.question();


// Created a while loop to loop the function back to the beginning if the user wants to play again.
while (true) {
    prompt('----------------------------------------')

    prompt(`Hello ${name}! Please ask me a question!`);
    let question = readline.question();

    // This is the random number that will generate the 8 ball response
    
    let number = Math.floor(Math.random() * 22);
    
    const eightBallResponse = (number) => {
        switch (number) {
            case 1:
                prompt('It is certain');
                break;
            case 2:
                prompt('Reply hazy, try again');
                break;
            case 3:
                prompt("Don't count on it");
                break;
            case 4:
                prompt('It is decidedly so');
                break;
            case 5:
                prompt('Ask again later');
                break;
            case 6:
                prompt('My reply is no');
                break;
            case 7:
                prompt('Without a doubt');
                break;
            case 8:
                prompt('Better not tell you now');
                break;
            case 9:
                prompt('My sources say no');
                break;
            case 10:
                prompt('Yes definitely');
                break;
            case 11:
                prompt('Cannot predict now');
                break;
            case 12:
                prompt('Outlook not so good');
                break;
            case 13:
                prompt('You may rely on it');
                break;
            case 14:
                prompt('Concentrate and ask again');
                break;
            case 15:
                prompt('Very doubtful');
                break;
            case 16:
                prompt('As I see it, yes');
                break;
            case 17:
                prompt('Most likely');
                break;
            case 18:
                prompt('Outlook good');
                break;
            case 19:
                prompt('Yes');
                break;
            case 20:
                prompt('Signs point to yes');
                break;
            case 21:
                prompt('No chance');
                break;
        };
    }

    // Calling the switch function to generate a random response.
    eightBallResponse(number);

    prompt(`${name}, would you like to ask another question?`);
    let answer = readline.question().toLowerCase();
    
    // If the user inputs "yes" or "no" it will loop back to the beginning of the program.
    while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLowerCase();
    }

    if (answer[0] === 'n') break;

}

