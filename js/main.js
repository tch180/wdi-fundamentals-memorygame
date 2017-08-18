var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardId){
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2){
    checkForMatch();}
   
  console.log("user flipped " + cards[cardId]);
  }
    


var checkForMatch = function() {
 if (cardsInPlay[0] === cardsInPlay[1]){
     alert("You've Found a Match");
 } else{
   alert("Sorry Try Again");
 }
}
    


flipCard(0)
flipCard(1)


