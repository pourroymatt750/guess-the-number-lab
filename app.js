const game = {
    title: 'Guess the Number!',
    //Prompts player to guess a number between 1 - 100
    getGuess() {
        return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
    },
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    //total number guessses stored in array
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
  }