var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards [0]; 
  cardsInPlay.push("queen");
console.log("user flipped a" + cardOne);

var cardTwo = cards [3];
cardsInPlay.push("queen");
console.log("user flipped a" + cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay [0] === cardsInPlay [1]){
  alert("you Found a match!");
	} else {
  alert("sorry try again");
	}
};