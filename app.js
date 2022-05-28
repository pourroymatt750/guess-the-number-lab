const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    //Prompts player to guess a number between 1 - 100
    getGuess: function() {
        prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
    },
    secretNum: null,
    //total number guessses stored in array
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
  }
console.log(game.getGuess())
