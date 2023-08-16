let food = new Map([
    ["burger","tasty"],
    ["apple","sweet"],
    ["carrot","healthy"]
]);
for(let name of food.keys()){
    console.log(name + ' - X');
}
for(let feature of food.values()){
    console.log(feature+ ' - Y');
}