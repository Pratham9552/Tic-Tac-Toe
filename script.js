console.log("Welcome to Game");

let gamewin_sound = new Audio("win.wav");
let gameover_sound = new Audio("gameover.wav");
let gameclick_sound = new Audio("click.wav");

let turn = 'X';
let isgameover = false;
let iswin = false;
let count = 0;
const changeturn = ()=>
{
    if(turn === 'X')
    {
        return 'O';
    }
    else
    {
        return 'X';

    }
}

const checkwin = ()=>
{
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

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") && (iswin===false)){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            iswin = true
            gamewin_sound.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })


}




let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if((boxtext.innerText === '') && (iswin === false)){
            boxtext.innerText = turn;
            turn = changeturn();
            count = count + 1;
            if(count===9)
            {
                gameover_sound.play();
            }
            gameclick_sound.play(); 
            checkwin();
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
    iswin = false
    count = 0;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
