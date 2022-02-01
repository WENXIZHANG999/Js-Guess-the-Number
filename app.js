const game = {
  title: 'Guess the Number!',
  biggestNum: 2,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function(){
    let guess
    while(isNaN(guess)|| guess < this.smallestNum || guess > this.biggestNum){
      guess = prompt("Guess a number!")
      guess = parseInt(guess)
    }
    return guess
  },
play: function(){
this.secretNum = Math.floor(Math.random()*(this.biggestNum - this.smallestNum+1))+this.smallestNum;

  while(this.prevGuesses[this.prevGuesses-1] !== this.secretNum){
    this.prevGuesses.push(this.getGuess())
    this.render()
  }
},
  render: function(){
  if(this.prevGuesses[this.prevGuesses.length-1]<this.secretNum){
   alert(`Your guess is too low. Previous guesses ${this.prevGuesses.join(' ')}`)}
   else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
    alert( `Your guess is too high. Previous guesses ${this.prevGuesses.join(' ')}`)
  } else {
    alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    }
}
  } 



game.play()