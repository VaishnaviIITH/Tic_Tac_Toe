console.log("Welcome to tic tac toe")

let turnn = new Audio("Music.mp3");
let gameoverr= new Audio("gameover.mp3");
let turn ="X"
let gameover = false;
//Function to change turn

const changeTurn = () =>{

    return turn === "X"?"0": "X";


}

//Function to win for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");//all the elements came
let wins = [
    [0,1,2,5,5,0],
    [3,4,5,5,5,15],
    [6,7,8,5,5,25],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e =>{
    let a= document.querySelector('.info');
if((boxtext[e[0]].textContent === boxtext[e[1]].textContent) && (boxtext[e[0]].textContent === boxtext[e[2]].textContent)&& (boxtext[e[0]].textContent !== "")){
document.querySelector('.info').textContent = boxtext[e[0]].textContent + " Won"
    gameover=true;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "200px"
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    document.querySelector(".line").style.width = "20vw";
    

}

})
}
//Game logic
//backGroundMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext= element.querySelector('.boxtext');  //grid box
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnn.play();
            checkWin();
            if(!gameover)
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }
    })

})
//Add onclick listerner to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameover=false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

   
})

