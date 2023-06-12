
let aca=[];
function calcAca(lwidth, rwidth, lbread, rbread){
    let width= (lwidth+ rwidth)/ 2;
    let bread= (lbread+ rbread)/ 2;
    let Aca = width* bread;

    let recordsAca={
        ဘယ်ဘက်အလျား  : lwidth,
        ညာဘက်အလျား  : rwidth,
        ဘယ်ဘက်အနံ  : lbread,
        ညာဘက်အနံ  : rbread,

        ဧက : Aca/1000 + "ဧက"
    }
    aca[aca.length]= recordsAca;
    

    return Aca;
}

console.log(calcAca(20,30,100,30))
console.log(calcAca(30,30,90,30))
console.log(calcAca(20,70,60,30))
console.log(calcAca(20,30,80,30))
console.log(calcAca(20,60,100,30))

console.table(aca);




// const records= [];
// function calcArea(width, bread){
//     let calc = ( width * bread) + "sqft";

//     let recordsArea = {
//         width: width+ "ft",
//         bread: bread+ "ft",
//         area: calc

//     }

//     records[records.length] = recordsArea;
//     return calc;
    
// }

// console.log(calcArea(20,60));
// console.log(calcArea(30,50));
// console.log(calcArea(50,90));
// console.log(calcArea(30,100));
// console.table(records);