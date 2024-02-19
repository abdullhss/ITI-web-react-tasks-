function a(x , y) {
console.log("befor");
console.log("x =", x);
console.log("y =", y);
[x, y] = [y, x];
console.log("x =", x);
console.log("y =", y);
}

function b() {
        arr = [1,4,2,5,7] ; 
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        console.log("min :", min);
        console.log("max :", max);
}
function c(){
    let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

    let AllStrings = fruits.every(item => typeof item === "string");
    console.log("all string", AllStrings);

    let startsWithA = fruits.some(item => item.startsWith("a"));
    console.log("start with a", startsWithA);

    let filter = fruits.filter(item => item.startsWith("b") || item.startsWith("s"));
    console.log("filter:", filter);

    let likeArr = fruits.map(item => `i like ${item}`);
    console.log(likeArr);
    likeArr.forEach(item => console.log(item));
}