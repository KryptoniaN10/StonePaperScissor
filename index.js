const playerText=document.querySelector("#playertext")
const computerText=document.querySelector("#computertext")
const resultText=document.querySelector("#resulttext")
const choiceBtns=document.querySelectorAll(".choiceButton")
const scoreP=document.querySelector("#playerscore")
const scoreC=document.querySelector("#computerscore")
let player
let computer 
let result
let playerscore=0;
let computerscore=0;
choiceBtns.forEach(button=>button.addEventListener("click",()=>{
    player = button.textContent
    computerTurn();
    playerText.textContent=`Player: ${player}`
    computerText.textContent=`Computer: ${computer}` 
    resultText.textContent=checkwinner()
    scoreupdate()
    


}))
function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            computer="Rock";
            break;
        case 2:
            computer="Paper";
            break;
        case 3:
            computer="Scissors";
            break;
    }

}
function checkwinner(){
    if(player == computer){
        return "Tie"
    }
    else if (computer =="Rock"){
        return(player=="Paper")?"You Win":"You Lose"

    }
    else if(computer=="Paper"){
        return(player=="Rock")?"You Lose":"You Win"

    }
    else if(computer=="Scissors"){
        return(player=="Rock")?"You Win":"You Lose"
    }
}function scoreupdate(){
    result=resultText.textContent;
    if(result=="You Win"){
        playerscore+=1;
        scoreP.textContent=`player: ${playerscore}`
    }
    else if(result=="You Lose") {
        computerscore+=1;
        scoreC.textContent=`computer: ${computerscore}`
    }
}
