const remainingNumbers=document.querySelectorAll('#remainingNumbers div');
let priceNumbers=document.querySelectorAll('.prize div div:not(.static)');
const restartButton=document.querySelector('#restart');

function restartGame(anArray, anotherArray){
    for (let i of anArray){
        i.innerHTML="<p>_</p>";
    }
    for (let i of anotherArray){
        i.className="";
    }
}

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
        }
    })
}

restartButton.addEventListener("click", function(){
    restartGame(priceNumbers,remainingNumbers);
})