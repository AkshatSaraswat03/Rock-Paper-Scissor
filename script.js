let userscore = 0
let compscore = 0
const userscore_span = document.getElementById('user-score')
const compscore_span = document.getElementById('comp-score')
const scoreboard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissor_div = document.getElementById('s')

function convert(x) {
    if(x==="r") return "Rock"
    if(x==="p") return "Paper"
    return "Scissor"
}


function win(user, comp){
    userscore++
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML = compscore
    result_div.innerHTML = convert(user) + " beats " + convert(comp) + ". You WIN!!"
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('green-glow')
    }, 400);
}

function lose(user, comp){
    compscore++
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML = compscore
    //result_div.innerHTML = convert(comp) + " beats " + convert(user) + ". You LOSE!!"             ECMA script 5 method
    result_div.innerHTML = `${convert(comp)} beats ${convert(user)}. You LOSE!!`                    //ECMA script 6 method
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('red-glow')
    }, 400);
}

function draw(user, comp){
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML = compscore
    result_div.innerHTML = " Both got " + convert(user) + ". DRAW!!"
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('gray-glow')
    }, 400);
}



function game(userChoice) {
    let compChoice = getCompChoice()
    switch(compChoice + userChoice){
        case "rs":
        case "pr":
        case "sp":
            lose(userChoice, compChoice)
            break;
        
        case "sr":
        case "rp":
        case "ps":
            win(userChoice, compChoice)
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice)
            break;
    }

}

function getCompChoice(){
    const choices = ['r', 'p', 's']
    return choices[Math.floor(Math.random() * 3)]
}

function main(){

    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissor_div.addEventListener('click', function() {
        game("s")
    })


}


main()
