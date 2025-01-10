let userInput = document.getElementById('idText')
let submitBtn = document.getElementById('sbmtBtn')
let prevGuesses = document.getElementById('pgSp')
let remGuesses = document.getElementById('rgSp')
let errorSp = document.getElementById('errSp')
let resSp = document.getElementById('res')
let arrPrevGuess = []
let arrRandomG = []
let totalCount = 10
let gameOver =false

function generateRandomGuess()
{
    return (Math.floor(Math.random()*100)); 
}

submitBtn.addEventListener('click',function(e){

    let rn = generateRandomGuess();
    
    let userInputVal = parseInt(userInput.value)
    
    if(userInputVal == '' || userInputVal < 0 || isNaN(userInputVal))
        {            
            errorSp.innerHTML = "provide Correct input"
        } 
        else{       
            if(totalCount == 0)
            {
                
                gameOver = true
                errorSp.innerHTML = "Game Over try again"
                arrPrevGuess = []
                arrRandomG = []
                gameOver = false
                totalCount = 10
            }else
            {
                                
                totalCount = totalCount -1 
                remGuesses.innerHTML = totalCount.toString()
                arrPrevGuess.push(userInputVal)
                prevGuesses.innerHTML = arrPrevGuess.join(",")
                arrRandomG.push(rn)
                resSp.innerHTML = arrRandomG.join(",")
                
            }   
        }
    
})

