// mmk to usd ;1usd = 2100mmk

const rates = {
  usd: 2100,
  sgd: 1490,
  eur: 2108,
};

function usdToMmk(input){
    return input* 2100 + " MMK";

}

function toMMK(inputAmount, rate){
    return (inputAmount*rates[rate]) + " MMk"
}


function fromMMK(inputMmk,currency){
    return (inputMmk/ rates[currency]) +  currency  
}

//from any currency to any currency
//500usd*2100/ currency

function exchangeToAnyCurrency(inputAmount,currency,toCurrency){
    let toMmk = inputAmount*rates[currency];
    return (toMmk/rates[toCurrency]) + toCurrency;
}
console.log(exchangeToAnyCurrency(3000,"usd", "sgd"))
console.log(exchangeToAnyCurrency(1,"usd", "usd"))
console.log(exchangeToAnyCurrency(3000,"eur", "sgd"))
console.log(exchangeToAnyCurrency(3000,"usd", "eur"))


console.log(usdToMmk(400))
console.log(usdToMmk(1000))

console.log(toMMK(990,"sgd"))
console.log(toMMK(990,"usd"))
console.log(toMMK(990,"eur"))

console.log(fromMMK(100000, "usd"))
console.log(fromMMK(150000, "eur"))
console.log(fromMMK(1000000, "usd"))