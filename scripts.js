let giftCardFor = 10000

const items = [
    500,300
]

console.log(items.length)
/*version for*/
for (let i=0;i<items.length;i++){
    giftCardFor-=items[i]    
}

console.log(giftCardFor)

/*version while*/
let giftCardWhile = 5000
let n=0
while (n<items.length){
    giftCardWhile-=items[n]
    n++
    
}

console.log(giftCardWhile)

/*Version DoWhile*/
let giftCardDoWhile = 2000
let s=0
do{
    giftCardDoWhile-=items[s]
    s++
} while (s<items.length)
    
console.log(giftCardDoWhile)