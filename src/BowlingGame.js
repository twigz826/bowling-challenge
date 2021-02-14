'use strict';

class BowlingGame {

  constructor(){
    this.rolls = [];
    this.score = 0;
  }

  showScore = () => this.score;

  roll = (roll1,roll2) => {
    this.rolls.push([roll1,roll2]);
    this.score += (roll1 + roll2);
  }

  // updateScore = (roll1,roll2) => {
  //   this.score += (roll1 + roll2);
  // }

}
