console.log('---- FOR loops ----')
console.log('--- Example 1 ---')
for(let counter = 10; counter>=0; counter--){
    console.log(`Currently counting ${counter}`)
}
console.log('--- Example 2 ---')
let initialNum = parseInt(prompt('Enter a number between 0 and 90'))
for(initialNum; initialNum>=0; initialNum--){
    if(initialNum%5===0){
        console.log(`Counting = ${initialNum}`)
    }
}
console.log('--- Example 6 ---')
let cars = ['Mazda','Tesla','Dodge','BMW','Porshe']
for(let eachCar of cars){
    console.log(eachCar)
}
console.log('--- Example 8 ---')
for(let outerCounter = 1; outerCounter<=5; outerCounter++){
    console.log(`outer counter = ${outerCounter}`)
    for(let innerCounter = 30; innerCounter>=0; innerCounter -= 10){
        console.log(`inner counter = ${innerCounter}`)
    }
}
console.log('--- Example 9 ---')
let i = 10
while(i>=10){
    console.log(`Currently counting ${i}`)
    i--
}
console.log('--- Example 11 ---')
for(let counter = 5; counter>=-10; counter--){
    console.log(`counting = ${counter}`)
    if(counter===-4){
        break
    }
}
console.log('--- Example 12 ---')
for(let y = -10; y<=10; y++){
    if(y%2===0){
        console.log(y)
    }
}
/*--------------------------------------- FUNCTIONS ---------------------------------*/
console.log('--- Example 2 ---')
function printCount(){
    for(let n = 3; n>0; n -= 1){
        console.log(n)
    }
}
console.log('--- Example 3 ---')
function greeting(name){
    console(`Hello ${name}`)
}
console.log('--- Example 5 ---')
function greet(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName[0].toUpperCase()}`)
}

function doubleNumber(number){
    number *= 2
    return number
}