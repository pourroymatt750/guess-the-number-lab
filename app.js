const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    //Prompts player to guess a number between 1 - 100
    getGuess: function() {
        let userGuess
        do {
            userGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        } while (userGuess < this.smallestNum || userGuess > this.biggestNum)
        return userGuess
        }
    },
    render: function() {
        console.log("renderhit")
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


 
        