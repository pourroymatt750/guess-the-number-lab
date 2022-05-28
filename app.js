const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    //Prompts player to guess a number between 1 - 100
    getGuess: function(num) {
        prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
        //Ensures user entry is a number not string and is between 1 - 100
        let parsed = parseInt(num)
        while (parsed !== NaN) {
            if (parsed >= 1 && parsed <= 100) {
                return parsed
            } else {
                return 'Error, only numeric gusses between 1 - 100 allowed.'
            }
        }
    },
    secretNum: null,
    //total number guessses stored in array
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        //Invokes getGuess() and adds new guess to prevGuesses[]
        let userGuess = ' '
        while (userGuess === true) {
            getGuess().push(prevGuesses)
        }
  }
  
}

