const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    //Prompts player to guess a number between 1 - 100
    getGuess: function(userGuess) {
         prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
         let parsedGuess = parseInt(userGuess)
         while (parsedGuess!== NaN && parsedGuess >= 1 && parsedGuess <= 100) {
             return parsedGuess
         }
    },
    render: function(parsedGuess, secretNum, prevGuesses) {
        if (game.parsedGuess === game.secretNum) {
            return `Congrats! You guessed the number in ${game.prevGuesses.length}!`
        } else if (game.parsedGuess > game.secretNum) {
            return `Your guess is too high. Previous guesses: ${game.prevGuesses.join()}`
        } else if (game.parsedGuess < game.secretNum) {
            return `Your guess is too low. Previous guesses: ${game.prevGuesses.join()}`
        }
    },
    secretNum: null,
    //total number guessses stored in array
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        //Invokes getGuess() and adds new guess to prevGuesses[]
      while (game.parsedGuess !== game.secretNum) {
        game.prevGuesses = game.getGuess()
      }
      game.render()
      
      if (game.parsedGuess === game.secretNum) {
          return 
      }
    }
}
game.play()


 // //Ensures user entry is a number not string and is between 1 - 100
        // let parsed = parseInt(userGuess)
        