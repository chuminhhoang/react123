// function rangThit(thit, hanh) {
//     console.log("da rang thit xong")
// }

// function bayRaDia(thitRang) {
//     console.log("Da bay ra dia");
// }

// function main() {
//     rangThit();
//     nauCom();

// }

//Callstack(gọi chồng hàm): Khu vực chạy chương trình
//Oueue : Vào ra lần lượt 
//Callback(Gọi lại): 

// const fs = require("fs")

// function onReadFileDone(err, data) {
//     if(err) {
//         console.log("err", err);
//     }
//     console.log("File content: ", data);
// }

// const filecontent = fs.readFileSync("./file.txt", {encoding: "utf-8"});

// fs.readFile("./file.txt", {encoding: "utf-8"}, onReadFileDone)

// console.log("file.txt: ", filecontent);
// console.log("helloooooooooooooooooo");

//Callback
//ReadFile: Chạy bất đồng bộ
//ReadFileSync: Chạy đồng bộ lần lượt 

// Cách 1
const add = function (value, index) {
    return value + 1;
}
//Cách 2
const add =  (value, index) => {
    return value + 1;
}

const arr = [1, 2, 3, 4, 6, 6, 7, 8];
const newArr = arr.map(add)

//Cách 2
const newArr = arr.map(function(value, index) {
    return value +1;
})
//Cách 1
const newArr = arr.map((value) => {
    return value + 1
})

console.log(newArr);





