console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
let gamecontainer=document.querySelector(".gameContainer")

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
let abcd=function resetafterwin(){
  
        let boxtexts = document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element => {
            element.innerText = ""
        });
        turn = "X"; 
        isgameover = false
        document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
   
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let resetAfterWin;
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            var tl=gsap.timeline();
            tl.to(reset,{
                
                duration:3,
                ease:Expo.easeInOut,
        
            })
          
            setTimeout(function(){
                gamecontainer.innerHTML=`<h1>${boxtext[e[0]].innerText} WON</h1>`
                // gamecontainer.style.marginTop=`350px`
                gamecontainer.style.width=`300px`
                gamecontainer.style.height=`300px`
                // gamecontainer.style.marginLeft=`500px`
                gamecontainer.style.backgroundColor=`#ffff`
                gamecontainer.style.display=`flex`
                gamecontainer.style.alignItems=`center`
                gamecontainer.style.justifyContent=`center`
                gamecontainer.style.borderRadius=`50px`
            },1500)
            
           
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})


