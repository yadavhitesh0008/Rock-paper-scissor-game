let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genCompChoice =() => {
     const options = ["rock","paper","scissors"];
     
     const randidx = Math.floor(Math.random() * 3) ;
     return options[randidx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText ="match draw play agian";
    msg.style.backgroundColor = "black";
    msg.style.color ="white";
}

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!!");
        userScore++;
        userScorepara.innerText =userScore;
        msg.innerText ="you win!!";
        msg.style.backgroundColor = "green";
        msg.style.color ="black";
    } else {
        console.log("you lose ");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText ="you lose";
        msg.style.backgroundColor = "red";
        msg.style.color ="white";
    }
};

const playgame = (userChoice) => {
  

   const compchoice = genCompChoice();
 
   if(userChoice === compchoice){
    drawGame();
   } else {
    let userWin = true;
if (userChoice === "rock") {
  userWin =  compchoice === "paper" ? false : true ;
} else if( userChoice === "paper"){
    userWin = compchoice === "scissors" ? false : true;
}
else{
  userWin = compchoice ==="rock" ?  false :true ;
}
showWinner(userWin);
   }


};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playgame(userChoice);
    });
});