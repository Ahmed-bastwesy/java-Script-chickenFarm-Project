import { Basket, Egg } from "./gameClasses.js";

//<<----------------------------function of user name and date---------------------------->>
function getUserName() {
    let userName = document.location.href.split("?")[1].split("=")[1];
    return userName;
  }
// post name to using fetch post
   let data = { name: getUserName() };
    try {
      fetch("https://node-monge-iti-project.herokuapp.com/games", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
           });
         }
    catch (err) {console.log("error happened");}
    
// get last time player enter the game using fetch get
  function getDate() {
    try {
      fetch( `https://node-monge-iti-project.herokuapp.com/games/${getUserName()}`)
        .then((response) => response.json())
        .then((data) => {
          let dateSpan = document.getElementById("Date");
          if (data.date) {
            let formatDate = new Date(data.date).toLocaleString("en-US");
            dateSpan.innerText = formatDate;
          } else dateSpan.innerText = "your first adventure";
          })
           .catch(() => {
                return 0;
           });
         } 
    catch (err) {console.log("error"); }
  }
  getDate();
// <<----------------------------------------functions------------------------------->>
//<<---------------------------- FUNCTION OF fallen eggs --------------------->>//
let timer =60;
let score=0;
function fallenEgg(){
    let basket1=new Basket();
    document.querySelector(".score").style.visibility="visible";
    let fallenEggTimer=setInterval(()=>{
        let egg =new Egg();
      let catchEggTimer= setInterval(() => {
            let eggOffsetTop=egg.body.offsetTop;
            let basketOffsetTop=basket1.body.offsetTop+50;
            let eggOffsetLeft =egg.body.offsetLeft+parseInt(egg.body.style.width);
            let basketOuterOffsetLeft=basket1.body.offsetLeft;
            let basketInnerOffsetLeft=basket1.body.offsetLeft+parseInt(basket1.body.style.width);
            if(eggOffsetTop>basketOffsetTop && eggOffsetTop<window.innerHeight-100){
                if(basketOuterOffsetLeft<eggOffsetLeft && eggOffsetLeft<basketInnerOffsetLeft)
                {
                    clearInterval(catchEggTimer);
                    score++; 
                    egg.body.style.visibility="hidden";
                }      
          }
          document.querySelector(".score").innerHTML=`score :  ${score}`;
        }, 10);
    },1000)
//<<<<----------------------------basket events---------------------------->>>>>>>
document.addEventListener("keydown",function(e){
        if(e.key == "ArrowRight"){
             basket1.moveRight(30);
     }
        else if(e.key == "ArrowLeft"){
            basket1.moveLeft(30);
       }
    }) 
//<<---------------------------- FUNCTION OF descending of timer--------------------->>//
let timerStart=setInterval(()=>{
timer--;
document.querySelector(".timer").innerHTML=`timer : ${timer}`  ;
if(timer==0){
    clearInterval(timerStart);
    clearInterval( fallenEggTimer);
    document.querySelector(".basket").remove();
    document.querySelector(".yourScore").innerHTML="yourScore : "+score;
    score=0;
    timer = 60;
    document.querySelector(".timer").style.visibility='hidden';
    document.querySelector(".score").style.visibility='hidden';
    gameOverWin.style.visibility='visible';  
}
},1000); 
}



//<<-------------------------------------------events---------------------------------------------------->>//

//<<----------------------game over window-------------------->>//
let gameOverWin =document.querySelector("#gameOverWin");
    gameOverWin.style.visibility='hidden';
//<<----------------------start play button-------------------->>//
let startButton=document.querySelector('.startPlay');
// start play event 
startButton.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundImage="url('./farm/farm5.jpg')";
    startButton.style.visibility='hidden';
    gameOverWin.style.visibility='hidden';
    document.querySelector(".gameName").style.visibility='hidden';
    document.querySelector(".timer").style.visibility='visible';
    fallenEgg();
    

});
//<<----------------------home page button-------------------->>//
let homeButton =document.querySelector(".home");
homeButton.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundImage="url('./farm/farmer-with-chickens-and-eggs.jpg')";
    gameOverWin.style.visibility='hidden';
    startButton.style.visibility='visible';
    document.querySelector(".gameName").style.visibility='visible';
});
//<<----------------------play again button-------------------->>//
let playAgainButton =document.querySelector(".playAgain");
    playAgainButton.addEventListener('click',()=>{
        startButton.style.visibility='hidden';
        gameOverWin.style.visibility='hidden';
        document.querySelector(".timer").style.visibility='visible';
        fallenEgg();
});









  
        
