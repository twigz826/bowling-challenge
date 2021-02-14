'use strict';

describe('BowlingGame', function(){

  let game;
  beforeEach(function(){
    game = new BowlingGame();
  })

  it('can roll a gutter game', function(){
    for (let i = 0; i < 10; i++) {
      game.roll(0,0)
    }
    expect(game.showScore()).toEqual(0)
  })

  it('can roll a game with all 1s', function(){
    for (let i = 0; i < 10; i++) {
      game.roll(1,1)
    }
    expect(game.showScore()).toEqual(20)
  })

})
