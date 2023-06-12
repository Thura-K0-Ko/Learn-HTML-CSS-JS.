
function canIPass(examMark, viperMark){
    if(examMark>= 60 && viperMark>= 60){
        return "you'll pass";
    }
        return "you'll fail";
}
console.log(canIPass(50,90));
console.log(canIPass(60,90));
console.log(canIPass(70,90));
console.log(canIPass(50,40));

function canIVote(nationality, age){
    if(nationality=== true && age>=18){
        return "U vote";
    }
    return "U can't vote";
}

console.log(canIVote(true,18));
console.log(canIVote(true,14));
console.log(canIVote(false,55));
console.log(canIVote(true,13));

function toComeMMsit(ybsNumber){
    if(ybsNumber===20 ||ybsNumber ===60){
        return "U reach";
    }
    return "U can't reach";
};
console.log(toComeMMsit(30));
console.log(toComeMMsit(20));
console.log(toComeMMsit(60));

function toFull(eat){
    if(eat=== "hotpot" || eat==="marLarShanChaw"){
        return "you full"
    }
    return "you not full"
}
console.log(toFull("hotpot"));
console.log(toFull("marLarShanChaw"));
console.log(toFull("iceCream"));

function youCanGetO2(channelTEL){
    if(channelTEL == "mrtv" || channelTEL=="myd"){
        return "no O2";
    }
    return "You will get"
}

console.log(youCanGetO2("mrtv"));
console.log(youCanGetO2("myd"));
console.log(youCanGetO2("other"));


// let a= " ";
// console.log(a);
// a=!a;

// console.log(a);
// a=!a;
// console.log(a);

// a=!a;
// console.log(a);

// a=!a;
// console.log(a);

// a=!a;
let q= [];
q && true && console.log("trkk");

let a= true;
a && (function(){
    console.log("HELLO");
    return true;
})() && console.log("thura ko ko")

function showMyName(name){
    if(typeof name === String) return name;
    
    return false;
}

console.log(showMyName(33));
console.log(showMyName("thu ra ko ko"));
console.log(showMyName(["aa", "bb"]));
console.log(showMyName({a:"name", b: "age"}));

function run(a,b,c){
     return arguments;
};
console.log(run("a", "b", "c", "s"));