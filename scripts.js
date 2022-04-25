let giftCardTotal= 10000
let giftCard= parseInt( prompt ("Ingrese el monto de la GiftCard"))

while (isNaN(giftCard)){
    giftCard = parseInt(prompt('Monto no válido, ingreselo nuevamente'));
}
let Cenas= 5000
let Indumentaria= 50000
let Celulares= 5000

let giftCardTipo= parseInt( prompt ("Ingrese el tipo de GiftCard: Cenas - Indumentaria - Celulares"))

let suma= 1;


for (let i = 0; i < suma; i++) {
    let giftCardTipo=  prompt ("Ingrese el tipo de GiftCard: Cenas - Indumentaria - Celulares")
    if (giftCardTipo == "Cenas"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por elegirnos!!")
    suma= suma - 1 ;
}else if (giftCardTipo == "Indumentaria"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por elegirnos!!")
    suma= suma - 1 ;
}else if (giftCardTipo == "Celulares"){
    prompt("Ingrese el e-mail del beneficiado")
    alert("¡¡Muchas gracias por elegirnos!!")
    suma= suma - 1 ;
}else{
    alert ("opcion no valida");   
    suma= suma + 1 ;
}
  
}

/*
let giftCardFor = 10000

const items = [
    500,300
]

console.log(items.length)
/*version for
for (let i=0;i<items.length;i++){
    giftCardFor-=items[i]    
}

console.log(giftCardFor)

/*version while
let giftCardWhile = 5000
let n=0
while (n<items.length){
    giftCardWhile-=items[n]
    n++
    
}

console.log(giftCardWhile)

/*Version DoWhile
let giftCardDoWhile = 2000
let s=
do{
    giftCardDoWhile-=items[s]
    s++
} while (s<items.length)
    
console.log(giftCardDoWhile)*/
