let results = []; // global
let data1 = {};
let data2 = {};

// ASYNC
axios.get('data1.json').then(function(r){
    console.log(r.data);
    console.log("data 1 loaded")
    data1 = r.data;
})
// END ASYNC

console.log("has data 1 been loaded?")

// ASYMC
axios.get('data2.json').then(function(r){
    console.log(r.data);
    console.log("data 2 loaded");
    data2 = r.data;
})
// END ASYNC

console.log("has data 2 been loaded?")

for (let i=0; i < data1.length; i++) {
    results.append({
        id: data1[i].id,
        quantity: data1[i].quantity,
        average_quality: data2[i].average_quality
    })
}

console.log("data has been merged")
console.log(results)