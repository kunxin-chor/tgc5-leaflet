let results = []; // global
let data1 = {};
let data2 = {};

loadDataOne();

function loadDataOne() {
        // ASYNC
    axios.get('data1.json').then(function(r){
        console.log(r.data);
        console.log("data 1 loaded")
        data1 = r.data;
        loadDatatTwo();
    })
    // END ASYNC
}


function loadDatatTwo() {
        // ASYMC
    axios.get('data2.json').then(function(r){
        console.log(r.data);
        console.log("data 2 loaded");
        data2 = r.data;
        mergeData();
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
