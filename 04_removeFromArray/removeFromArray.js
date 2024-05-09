const removeFromArray = function(arr, ...args) {
    for(remove of args){
        if(remove === null || !arr.includes(remove)) continue;
        do{
            arr.splice(arr.findIndex((element) => element === remove), 1);
        }while(arr.includes(remove))
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
