const remainingNumbers=document.querySelectorAll('#remainingNumbers div');
let priceNumbers=document.querySelectorAll('.prize div div:not(.static)');
const restartButton=document.querySelector('#restart');
let prizes=[[],[],[]];
let anArray=[0,1,2,3,4,5,6,7,8,9];
for (let i of remainingNumbers){
    i.addEventListener("click", function(event){
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

// console.log(priceNumbers);