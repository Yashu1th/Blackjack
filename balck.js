let firstCard=11;
let secondCard=10;
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";
let messageEl=document.getElementById("message-el");

function startGame(){
if(sum<=20){
    message="do you want to draw new card";
}
else if(sum===21){
    message="wohoo! you got balckjack!";
    hasBlackJack=true;     
}else{
    message="You're out of the game";
    isAlive=false;
}
// messageEl.textContent=message;
console.log(messageEl.textContent="yash")
console.log(message);
}

