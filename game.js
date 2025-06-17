//let userScore=0;
//let compScore=0;
let i=0;
let j=0;
const choice2=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgContainer=document.querySelector("msg-container");
const compScore=document.querySelector("#comp-score");
const userScore=document.querySelector("#user-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const readId= Math.floor(Math.random()*3);
   return options[readId];
}


const draw=()=>{
   console.log("it is a draw");

}

 
const playgame=(userChoice)=>
{
    console.log("user choice is",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is",compChoice);
  

    
    if (userChoice===compChoice){
        draw();
        msg.innerText="It is a DRAW";
        msg.style.backgroundColor="burlywood";
    }

    // user choice
    let userWin;
    if(userChoice==="rock"&&compChoice==="scissors"){
       console.log("You Won!");
       msg.innerText="You WON!!";
       userWin=true;
     }

     else if(userChoice==="scissors"&&compChoice==="paper"){
        console.log("You Won!");
        msg.innerText="You WON!!";
        userWin=true;
     }

     else if(userChoice==="paper"&&compChoice==="rock"){
        console.log("You Won!");
        msg.innerText="You WON!!";
        userWin=true;
     }
  // comp choice


    else if(userChoice==="scissors"&&compChoice==="rock"){
    console.log("You LOSE");
    msg.innerText="You LOSE";
    userWin=false;
     }

     else if(userChoice==="paper"&&compChoice==="scissors"){
     console.log("You LOSE");
     msg.innerText="You LOSE";
     userWin=false;
     }

     else if(userChoice==="rock"&&compChoice==="paper"){
    console.log("You LOSE");
    msg.innerText="You LOSE";
    userWin=false;
     }

    if (userWin==true){
        i++;
   userScore.innerText=i;
   msg.style.backgroundColor="green";
   msg.innerText=`You Won, Computer picked ${compChoice}`;
}
    else if(userWin==false){
        j++;
     compScore.innerText=j;
     msg.style.backgroundColor="red";
     msg.innerHTML=`You Lost, Computer picked ${compChoice}`;
    }
 
}

choice2.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       playgame(userChoice);
    })
})

