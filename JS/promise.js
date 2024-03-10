// let p =new Promise((resolve,reject)=>{
//     let meet=true;
//     if(meet){
//         resolve("We met at mehfil")
//     }else{
//         reject("some other work")
//     }
// })
// p.then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err)
// })
 

//async will returns the promise
//await keyword make to wait
// async function hello(){
//     console.log("first")
//     await console.log("second")
//     console.log("third")
//     console.log("fourth")
// }
// hello();
//     console.log("fifth")
//     console.log("sixth")
let section=document.getElementById("container")
console.log(section)
// let output= fetch("https://api.github.com/users");
// console.log(output)
// output.then((val)=>{
//  return val.json();
// }).then((val)=>{
//     return val.map((data)=>{
//        container.innerHTML+=`
//        <h1>${data.login}</h1>
//        `
        
//     })
// })
// console.log(output)


let out=async()=>{
    let val=(await fetch("https://api.github.com/users")).json();
    let finalout=await val;
    return finalout.map((data)=>{
    container.innerHTML+=`
    <h1>${data.login}</h1>
    `

    })
}
out();
