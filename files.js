import fs from "fs"

fs.readFile("./data.txt",(err,data)=>{
    console.log({err,data:data.toString()})
})

// writing files
fs.writeFile("./data2.txt","I don't like the previous text",(err)=>{
    console.log("file written")
})

//appending files
fs.appendFile("./data3.txt","New content",(err)=>{
    console.log("file appended")
})

// deleting files
// fs.unlink("./data3.txt", (err)=>{
//     console.log("file deleted")
// })

// checking file existence
const data = fs.existsSync("./data2.txt")
console.log(data)
// async function main(){
//     //reading files

//     // console.log(file)
// }

// main()