// Code your solutions in this file

for (let age=30; age < 40; age++) {
    console.log(age);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and ended a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);



 function countDown(int){
    let number=10;
    while (number>0){
        console.log(number);
        number=number-1;
        
    }
}
console.log(countDown(10));

