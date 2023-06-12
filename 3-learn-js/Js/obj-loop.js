const bags= [
    "mya", "eng", "math","chemistry","phy",
    {
        name:"thurakoko",
        age:28,
        village: "kyunoo"
    }
];

for(bag of bags){
    console.log(bag);
}
const koKoInfo={
    name: "koko",
    age:38,
    village: "kyunoo",
    mm: "myanmar",
    language:["myanmar","eng"]
}
for(key in koKoInfo){
    console.log(key,"/",koKoInfo[key]);
}

const ratings=[
    {
      id: 1,
      name: "kyaw kyaw",
      rate: 3
    },
    {
      id: 2,
      name: "zaw zaw",
      rate: 3
    },
    {
      id: 3,
      name: "mya mya",
      rate: 1
    },
    {
      id: 4,
      name: "tun tun",
      rate: 4
    },
    {
      id: 5,
      name: "ko ko",
      rate: 5
    },
    {
      id: 6,
      name: "ll ko",
      rate: 1
    }
];

for(rating of ratings){
    // console.log(rating.id, rating.name, rating.rate);
    for(key in rating){
        console.log(rating[key])
    }
    console.log("----------------")
}