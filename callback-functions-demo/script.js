let results = []; // global
let data1 = {};
let data2 = {};

loadDataOne(function(){
    loadDataTwo(function(){
        mergeData();
    });
});

function dumpData(r) {
    console.log(r);
}

function loadDataOne(callback_func) {
        // ASYNC
    axios.get('data1.json').then(function(r){
        console.log(r.data);
        console.log("data 1 loaded")
        data1 = r.data;
        callback_func();
    })
    // END ASYNC
}


function loadDataTwo(callback_func) {
        // ASYMC
    axios.get('data2.json').then(function(r){
        console.log(r.data);
        console.log("data 2 loaded");
        data2 = r.data;
        callback_func();
    })
    // END ASYNC
}


function mergeData() {
    for (let i=0; i < data1.length; i++) {
    results.push({
        id: data1[i].id,
        quantity: data1[i].quantity,
        average_quality: data2[i].average_quality
    })
}

    console.log("data has been merged")
    console.log(results)
}
