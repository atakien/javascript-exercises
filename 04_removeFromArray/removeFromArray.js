const removeFromArray = function(arr, ...e) {
    let newArray = arr;
    let array = [];
    for(let i = 0; i < newArray.length; i++){
        if(!e.includes(newArray[i])){
            array.push(newArray[i]);
        }
    }
        return array;
    };

// Do not edit below this line
module.exports = removeFromArray;
