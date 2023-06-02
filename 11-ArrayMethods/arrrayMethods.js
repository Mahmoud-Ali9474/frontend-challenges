Array.prototype.myMap=function(callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        let value = callback(this[i], i, this);
        output.push(value);
    }
    return output;
}

Array.prototype.myFilter=function(callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)===true){
            output.push(this[i]);
        }
    }
    return output;
}

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if(i===0 && initialValue===undefined){
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }     
    }
    return accumulator;
}
