// ---------- 1 -------------

function starString(num){
    var newString = ''
    for(var i = 0; i < num; i++){
        newString += "*"
    }
    return newString
}

console.log(starString(3))

// ---------- 2 -------------

function drawStars(arr){
    for(var i = 0; i < arr.length; i++){
        var newString = ""
        for(var j = 0; j < arr[i]; j++){
            newString += "*"
        }
        console.log(newString)
    }
}

var testArr = [3, 5, 6, 4, 4, 1]

drawStars(testArr)

// ---------- 3 -------------

function drawArr(arr){
    for(var i = 0; i < arr.length; i++){
        var newString = ""
        if(arr[i].constructor == Number){
            for(var j = 0; j < arr[i]; j++){
            newString += "*"
            }
            console.log(newString)
        } else if( arr[i].constructor == String){
            var currentWord = arr[i]
            var firstLetter = currentWord[0]
            for(var j = 0; j < arr[i].length; j++){
                newString += firstLetter
            }
            console.log(newString)
        }
        
    }
}

var weirdArr = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

drawArr(weirdArr)
