


const fruitPrice= {
    apple:500,
    mango: 200,
    orange: 100,
    banana: 40
}
function tax(totalCost, percent=5){
    let fruitTax= totalCost * percent/100;
    return fruitTax;
};

let total = 0;
let buyRecords=[];
function buy(fruitName, quantity){
    let cost = fruitPrice[fruitName] * quantity;
    let actualCost = tax(cost) + cost;
    total += actualCost;

    const record={
        FruitName: fruitName,
        Quantity: quantity,
        ActualCost: actualCost,
        Tax: tax(cost),
        TotalNet: total

    }

    buyRecords[buyRecords.length]= record;




    return `${fruitName}: ${actualCost}`;
}

console.log(buy("apple",9));
console.log(buy("mango",9));
console.log(buy("orange",9));
console.log(buy("banana",9));





console.log(`Total:`, total)

console.log(tax(4500))

console.log(buyRecords);
console.table(buyRecords);





for(let i=0; i<= buyRecords.length-1; i++){
    console.log(buyRecords[i].TotalNet)
}



//calculate function to Create

// let recs = [];
// function calcArea(width,breath){
    
//     let calc =  width * breath;
//     let result = calc + " sqft";
//     const rec={
//         Width: width,
//         Breadth: breath,
//         Total: result
//     };

//     recs[recs.length]= rec
//     return result;


// }

// console.log(calcArea(50,39));
// console.log(calcArea(40,59));
// console.log(calcArea(60,30));
// console.log(calcArea(100,39));

// console.table(recs);