var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},

];
var cardsInPlay = [];

var flipCard = function(cardId){
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2){
    checkForMatch();}
   console.log("user flipped " + cards[cardId].rank);
   console.log(cards[cardId].suit);
   console.log(cards[cardId].cardImage);
  }
    


var checkForMatch = function() {
 if (cardsInPlay[0] === cardsInPlay[1]){
     alert("You've Found a Match");
 } else{
   alert("Sorry Try Again");
 }
}
    


flipCard(0)