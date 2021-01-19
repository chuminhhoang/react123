//cách khai báo biến
//object
//phương thức chuỗi(indexOf, lastindexOf, )
//phương thức

const arr = [60, "abc", {a:"abc1", b:"abc2"}, null, undefined, true ]; //khai báo đối tượng
let newArr = [];

for (let i=0; i<arr.length; i++){ //for duyệt phần tử mảng
    newArr.push(String(arr[i]))
}

console.log(newArr);

function convertToString (arr) { //hàm 
    let returnValue = [];
    for (let i=0; i<arr.length; i++){
        let element = arr[i];
        if(typeof(arr[i]) == 'number')
            element = null;
    }
    return returnValue;
}
//phương thức map của mảng
function plus(a,b){
    return a+b;
}

console.log(plus(4,3));
function map(arr, bienDoi) {
    let returnValue = [];
    for(let i=0; i<arr.length; i++){
        const element = bienDoi(arr[i]);
        returnValue.push(element);
    }
    return returnValue;
}
console.log