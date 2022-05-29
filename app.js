const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    //total number guessses stored in array
    prevGuesses: [],
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
          console.log(this.secretNum)
      //Invokes getGuess() and adds new guess to prevGuesses[]
        do {
          this.prevGuesses.push(this.getGuess())
          console.log(this.prevGuesses)
      //Invokes render() method
          this.render()
        } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
      },
    getGuess: function() {
        let userGuess
        do {
            userGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        } while (userGuess < this.smallestNum || userGuess > this.biggestNum)
        return userGuess
    },
    render: function() {
        if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
            alert(`Congrats! You guessed the number in: ${this.prevGuesses.length} guesses!`)
        } else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
            alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join()}`)
        } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
            alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join()}`) 
        }
    },
}
game.play()


 
        