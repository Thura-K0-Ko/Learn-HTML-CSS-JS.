// let mark= 30;

// if(mark >= 80){
//     console.log("Destination");

// }else if(mark >= 40){
//     console.log("Pass");
// }else if(mark < 40){
//     console.log("Fail");
// }

// function cameICome(wakeUpTime){
//     if(wakeUpTime<= 9){
//         return "come in";
//     }
//     return "don't come";
// }
// console.log(cameICome(5))
// console.log(cameICome(8))
// console.log(cameICome(10))

//condition 1
let money = 700000;

if(money >= 500000){
    console.log("You can buy laptop.") 
}else if(money >= 200000){
    console.log("You can buy a phone.")
}else if(money < 200000){
    console.log("You can't buy anything.")
};

//condition 2
let honors =3;

if(honors >= 5){
    console.log("Your father give a car for you.")
}else if(honors >= 2){
    console.log("Your father give a bike for you.")
}else if(honors<2){
    console.log("Your father give a bicycle for you.")
}

//condition 3
let dieselLiter= 10;
if(dieselLiter>= 10){
    console.log("can go above 20mile")
}else if(dieselLiter>=5){
    console.log("can go withing 15mile")
}else if(dieselLiter<0){
    console.log("don't go anywhere.")
};

//condition 4
let englishLevel= 0;
if(englishLevel >= 3){
    console.log("You will learn many language from google.")
}else if(englishLevel >=1){
    console.log("You wil learn.")
}else if(englishLevel<1){
    console.log("You should learn english everyday.")
};
//condition 5
let mealPrize=400;
if(mealPrize<=100){
    console.log("buy50kg")
}else if(mealPrize<=300){
    console.log("buy 20kg")
}else if(mealPrize <= 500){
    console.log("buy 10kg");
};

//1
function rain(haveAnUmbrella){
    if(haveAnUmbrella==true){
        return "You will not wet."
    }
    return "You will wet."
}
console.log(rain(false));
console.log(rain(true));

//2
function canIUseInternet(packageMb){
    if(packageMb>= 1000){
        return "You can use internet."
    }
    return "You can't use internet."
}
console.log(canIUseInternet(1000));
console.log(canIUseInternet(600));

//3
function developer(learnEveryDay){
    if(learnEveryDay==true){
        return "You will become a developer."
    }
    return "You will'n. ";
}
console.log(developer(true));
console.log(developer(false));

//4
function toBath(isWater){
    if(isWater==true){
        return "Bath"
    }
    return "no bath."
}
console.log(toBath(true));
console.log(toBath(false));

//5
function knowledge(readBook){
    if(readBook>= 10){
        return "You have a lot of knowledge."
    }else if(readBook>=1){
        return "You have little knowledge."
    }
    return "You have no knowledge."
    
}
console.log(knowledge(55));
console.log(knowledge(0));
console.log(knowledge(3));


let wakeUp = 3;
if(wakeUp>=8){
    console.log("ကြိမ်လုံးလေးနဲ့လာနှိုးမယ်") ;
}else{
    console.log("very good.")
}