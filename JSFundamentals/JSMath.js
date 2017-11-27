// ---------- 1 --------------
function zero_negativity(arr){
    var flag = true;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            flag = false
            return flag
        }
    }
    return flag
}

var testArr = [0, 3, 5, 12, 6, 9]

console.log(zero_negativity(testArr))

// ---------- 2 --------------
function is_even(num){
    if(num % 2 == 0){
        return true
    } else {
        return false
    }
}

var testNum = 18882
console.log(is_even(testNum))

// ---------- 3 --------------
function how_many_even(arr){
    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            count++
        }
    }
    return count
}

console.log(how_many_even(testArr))

// ---------- 4 --------------
function create_dummy_array(num){
    var newArr = []
    for(var i = 0; i < num; i++){
        var random = Math.floor(Math.random() * 10)
        newArr.push(random)
    }
    return newArr
}

console.log(create_dummy_array(15))

// ---------- 5 --------------
function random_choice(arr){
    var chosenOne = Math.floor(Math.random() * arr.length)
    return arr[chosenOne]
}

console.log(random_choice(testArr))
