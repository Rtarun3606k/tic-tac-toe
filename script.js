console.log("welcome to tic tac toe")
let music_slash = new Audio("news-ting-6832.mp3")

let music_ting = new Audio("snd_fragment_retrievewav-14728.mp3")
let music_winning = new Audio("success-fanfare-trumpets-6185.mp3")

let turn = "X"
let gameOver = false
const changeTurn = () => {
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0%"
    return turn === "X" ? "O" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2 , 1,4,180,-18,8,180,58],
        [3, 4, 5,1,13,180,-18,31,180,58],
        [6, 7, 8,1,22,180,15,55,180,58],
        [0, 3, 6 ,-9, 13, 90, -43, 26, 90,58],
        [1, 4, 7, 1, 13, 90,-18, 26, 90,58],
        [2, 5, 8 , 11, 13, 90,7, 26, 90,58],
        [0, 4, 8,1,13,41,-25,29,42,75],
        [2, 4, 6,1,13,139,-21,33,140,69],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            music_slash.play()
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="50%"
            document.querySelector('.line').style.width = "30vw"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.lines').style.width = `${e[9]}vw`
            // document.querySelector('.boxes div:hover').style.background = `#212529`
            // document.querySelector('.boxes div:hover').style.height = `10px`
            document.querySelector('.lines').style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
            music_winning.play()
        }
    })
    
}

//game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            // console.log("click")
            boxtext.innerText = turn
            turn = changeTurn()
            music_ting.play()
            checkWin()
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
            }
        }
    })
})


reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })
    turn= 'X'
    gameOver = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0"
    document.querySelector('.line').style.width = "0vw"
    document.querySelector('.lines').style.width = "0vw"
})