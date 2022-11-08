//Create variables for calling different parts of page
const remainingNumbers=document.querySelectorAll('#remainingNumbers div');
let priceNumbers=document.querySelectorAll('.prize div div:not(.static)');
const restartButton=document.querySelector('#restart');
let carPrice=document.querySelectorAll('#carPrice div');
let randomPrice=document.querySelectorAll('#prizePrice div');
let cashPrice=document.querySelectorAll('#cashPrice div')

//Create function to restart the game and reset the prices
function restartGame(anArray, anotherArray){
    for (let i of anArray){
        i.innerHTML="<p>_</p>";
    }
    for (let i of anotherArray){
        i.className="";
    }
}

//Create function to check if one of the prices has been fully guessed
function checkForWin(x){
    let numbersLeftCount=0;
    for(let i of x){
        if (i.innerText=="_"){
            numbersLeftCount=numbersLeftCount+1;
        }
    }
    return (numbersLeftCount==0);
}

//Add event listeners to the clickable numbers to randomly assign number to a price slot and then check for a win. 
for (let i of remainingNumbers){
    i.addEventListener("click", function(){
        if(i.className=="clicked"){
            alert("That number has already selected. Please choose a new number.")
        }
        else{
            let aVar=true;
            while(aVar){
                let aPrice =priceNumbers[Math.floor(Math.random() * 10)];
                if(aPrice.innerText=="_"){
                    aPrice.innerHTML=i.innerHTML
                    aVar=false;
                }
            }
            i.className="clicked";
            if (checkForWin(carPrice)){
                alert("Congratulations! You won the Car Prize");
                restartGame(priceNumbers, remainingNumbers);
            }
            if (checkForWin(randomPrice)){
                alert("Congratulations! You won the Vacation Prize");
                restartGame(priceNumbers, remainingNumbers);
            }
            if (checkForWin(cashPrice)){
                alert("Congratulations! You won the Cash Prize");
                restartGame(priceNumbers, remainingNumbers);
            }
        }
    })
}

//Add event listener to the restart button to restart the game.
restartButton.addEventListener("click", function(){
    restartGame(priceNumbers,remainingNumbers);
})