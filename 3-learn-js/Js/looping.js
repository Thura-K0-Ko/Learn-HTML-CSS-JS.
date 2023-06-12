// const marks=[56,67,77,85,77,90];
// for(let mark=0; mark < marks.length; mark++ ){
//     console.log(marks[mark]);
// }

const mgMgInfo = {
  name: "Mg Mg",
  age: 15,
  marks: [
    {
      id: 1,
      name: "Myanmar",
      mark: 67,
    },
    {
      id: 2,
      name: "English",
      mark: 88,
    },
    {
      id: 3,
      name: "Math",
      mark: 90,
    },
    {
      id: 4,
      name: "Physic",
      mark: 50,
    },
    {
      id: 5,
      name: "Chemistry",
      mark: 55,
    },
    {
      id: 6,
      name: "Eco",
      mark: 74,
    },
  ],
};

mgMgInfo.total = 0;
mgMgInfo.results = {};

// mgMgInfo.results.myanmar="succ"
for (let i = 0; i < mgMgInfo.marks.length; i++) {
  // console.log(mgMgInfo.marks[i].mark)
  mgMgInfo.total += mgMgInfo.marks[i].mark;
  // mgMgInfo.results[mgMgInfo.marks[i].name]=mgMgInfo.marks[i].mark >=40  ? "success" : "fail"
  if (mgMgInfo.marks[i].mark >= 40) {
    mgMgInfo.results[mgMgInfo.marks[i].name] = "success";
  } else {
    mgMgInfo.results[mgMgInfo.marks[i].name] = "fail";
  }
}
console.log(mgMgInfo.results);

console.log(mgMgInfo.total);

function starGenerator(count, element="*") {
  let star = "";
  for (let x = 1; x <= count; x++) {
    star+= element;
  }
  return star;
}

for(i=1; i<=6; i++){
  // console.log(starGenerator(i, i%2===0 ? "=" : "*"))
  if(i%2===0){
    console.log(starGenerator(i, "y"))
  }else{
    console.log(starGenerator(i,"x"))
  }
}


for(let i=1; i<= 5; i++){
  let star="";
  for(let x=1; x<=5; x++){
   
    if(x>=i){
      star+="*"
    }else{
      star+="-"
    }
    // x<=i ? star+="*" : star+= "-"
    // console.log(star,x)
  }
  console.log(star)
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


for(i= 0; i<ratings.length ; i ++){
  let star="";
  for(x= 1; x<=ratings[i].rate; x++){
    star+="*"
  }
console.log(star,ratings[i].rate,ratings[i].name);
}

for(i=0; i<ratings.length; i++){
  let star="";
  for(x= 1; x<=5; x++){
    if(x<= ratings[i].rate){
      star+="*";
    }else{
      star+="-"
    }
  }
  console.log(star,"__",ratings[i].name)

}

// for(let i=1; i<= 10; i++){
  
//   console.log(starGenerator(i),i)
// }
// for(let i=10; i>= 1; i--){
//   console.log(starGenerator(i))
// }





// for (let i = 1; i <= 6; i++) {
//   let star = "";
//   for (x = 1; x <= i; x++) {
//     star += "*";
//   }
//   console.log(star, i);
// }

// for (let i = 9; i >= 1; i--) {
//   let dolor = "-";
//   // console.log(i)
//   // console.log(dolor)
//   for (x = 1; x <= i; x++) {
//     dolor += "$";
//     // console.log("first x",x)
//     // console.log("first i",i)
//   }

//   console.log("sec x" + x, dolor, "sec i" + i);
// }

