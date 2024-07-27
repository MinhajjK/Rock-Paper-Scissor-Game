const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScore1 = document.querySelector("#your_score");
let compScore1 = document.querySelector("#comp_score");
let userwon = -1;
console.log(choices);
let userScore = 0;
let compScore = 0;

let options = ["rock","paper","scissor"];
function compChoice(){
    let idx = Math.random() * 3;
    idx = Math.floor(idx);
    console.log("Comp Chooses " + options[idx]);
    return options[idx];
}

function CalculateResult(compChoice, UserChoice){
    if(UserChoice == "rock"){
        if(compChoice == "scissor"){
            userwon = 1;
            return userwon;

        } else if(compChoice == "paper"){
            userwon = 0;
            return userwon;
        }
        else{
            userwon = -1;
            return userwon;
        }
    }
     else if(UserChoice == "paper"){
        if(compChoice == "scissor"){
            userwon = 0;
            return userwon;

        } else if(compChoice == "rock"){
            userwon = 1;
            return userwon;
            
        }
        else{
            userwon = -1;
            return userwon;

        }
    }
    else if(UserChoice == "scissor"){
         if(compChoice == "rock"){
            userwon = 0;
            return userwon;

        } else if(compChoice == "paper"){
            userwon = 1;
            return userwon;
            
        }
        else{
            userwon = -1;
            return userwon;

        }
    }

}
function ShowResult(result){
    if(result == 1){
        console.log("You won");
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
        userScore++;
        userScore1.innerText = userScore;

    } else if(result == 0){
        console.log("You lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        compScore++; 
        compScore1.innerText = compScore;

    } else if(result == -1){
        console.log("draw");
        msg.innerText = "Draw! Play Again.";
        msg.style.backgroundColor = "#180161";


    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id");
        console.log("User choose " + UserChoice);
        const CompChoice = compChoice();
        let result = CalculateResult(CompChoice,UserChoice);
        ShowResult(result);
    });
});

