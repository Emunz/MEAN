// 1
var x = [];

x.push('coding')
x.push('dojo')
x.push('rocks')
x.pop()

console.log(x)

// 2

const y = [];
y.push(88)
console.log(y)

// 3
var z = [9, 10, 6, 5, -1, 20, 13, 2]
for(var i = 0; i < z.length-1; i++){
    console.log(z[i])
}

// 4
var names = ['Katie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for(var i = 0; i<names.length; i++){
    if(names[i].length == 5){
        console.log(names[i])
    }
}

// 5

function yell(string){
    console.log(string.toUpperCase());
}

yell('I was always a lonely boy')