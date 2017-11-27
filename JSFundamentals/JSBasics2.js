function magic_multiply(x, y){
    if(y.constructor === String){
        return "Error: Cannot multiply by a string"
    } else if(x.constructor === Array){
        var z = []
        for(var i = 0; i < x.length; i++){
            z.push(x[i] * y)
        }
        return z
    } else if(x.constructor === String) {
        var z = ""
        for(var i = 0; i < y; i++){
            z = z + x
            return z 
        }
    } else {
        var z = x * y
        return z
    }

    
}

let test1 = magic_multiply(5, 2);
console.log(test1)

let test2 = magic_multiply(0, 0);
console.log(test2)

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);