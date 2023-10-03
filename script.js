const boxes = document.querySelectorAll(".box");
const playerinf0 = document.querySelector(".player-info");
const newgamebtn = document.querySelector(".btn");

let currentPlayer;
let gridgame;
let count = 0;
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initGame(){
    currentPlayer = "X";
    playerinf0.innerText = `Current Player - ${currentPlayer}`;
    gridgame = ["","","",
                "","","",
                "","",""];
    
    boxes.forEach((box , index)=>{
        box.innerText = ""
        box.style.pointerEvents = "all";
        box.classList.remove("win")
    })

    // hide button
    newgamebtn.classList.remove("active")
    count  = 0;
}
initGame()

 // ---------------------------------------------------------------------

function playerterm(){
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
 playerinf0.innerText = `Current Player - ${currentPlayer}`;

}

 // ---------------------------------------------------------------------

function handlecheck(index){
 if(gridgame[index] ==""){
    boxes[index].innerText = currentPlayer;
       gridgame[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
       
 }
 playerterm();
 checkGameOver();

}

 // ---------------------------------------------------------------------

boxes.forEach((box,index) => {
   box.addEventListener("click",function(){
    handlecheck(index);
   })
});


 // ---------------------------------------------------------------------
 function checkGameOver() {
    let answer = "";
   

   winningPositions.forEach((position)=>{
    if((gridgame[position[0]] !== "" || gridgame[position[1]] !== "" || gridgame[position[2]] !== "")
    && ( gridgame[position[0]] == gridgame[position[1]] && gridgame[position[1]] ==gridgame[position[2]])) {
       
        if(gridgame[position[0]] == "X"){
              answer = "X";
        }
        else{
            answer = "O";
        }
// disable pointer Events
        boxes.forEach((box) => {
            box.style.pointerEvents = "none";
        })

        // clower visibal
        boxes[position[0]].classList.add("win")
        boxes[position[1]].classList.add("win")
        boxes[position[2]].classList.add("win")

        // add btn

        newgamebtn.classList.add("active")
        playerinf0.innerText = `Winner Player - ${answer}`
    }

    
   });
  
   
  count =  count + 1;
   console.log(count)
if(count==9){
    playerinf0.innerText = " Tide Game !"
    newgamebtn.classList.add("active")
}
 }

 newgamebtn.addEventListener("click",initGame)



 