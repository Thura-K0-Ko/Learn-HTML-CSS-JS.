const name= "Mg Mg";
const age= 15;
const bag= ["mya", "eng", "math"];

let bio = "dev";
const students = [
    {
        name: "Kyaw",
        age: 15,
        skill: ["html", "css", "js"]
    },
    {
        name: "mya",
        age: 14,
        skill: ["jquery", "scss", "nodeJs"]
    },


    {
        name: "Kyaw",
        age: 15,
        skill: ["html", "css", "js"]
    },
    {
        name: "mya",
        age: 14,
        skill: ["jquery", "scss", "nodeJs"]
    },
    {
        name: "Kyaw",
        age: 15,
        skill: ["html", "css", "js"]
    },
    {
        name: "mya",
        age: 14,
        skill: ["jquery", "scss", "nodeJs"]
    },
    "komaung oo",
    [`name= "Kyaw",
    "age: 15",
    "skill: ["html", "css", "js"]"`]
]


function getfree(isMember){
    return (isMember ? "getfree" : "paid$" )
}

console.log(getfree({}));
console.log(getfree(" "));
console.log(getfree(0));
console.log(getfree("0"));
console.log(getfree(" "));
console.log(getfree(""));
console.log(getfree("false"));
