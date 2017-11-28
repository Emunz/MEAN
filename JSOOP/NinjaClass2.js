function ninjaConstructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}

ninjaConstructor.prototype.sayName = function(){
    console.log("My name is", this.name)
    return this
}

ninjaConstructor.prototype.showStats = function(){
    console.log("Name: " + this.name)
    console.log("Health: " + this.health + " Speed: " + this.speed + " Strength: " + this.strength)
    return this
}

ninjaConstructor.prototype.drinkSake = function(){
    this.health += 10
    console.log("Your health is now at " + this.health)
    return this
}

ninjaConstructor.prototype.punch = function(ninjaConstructor){
    ninjaConstructor.health -= 5
    return this
}

ninjaConstructor.prototype.kick = function(reciever){
    var damage = this.strength * 15
    reciever.health -= damage
    return this
}

const fighterOne = new ninjaConstructor("Evan")
const fighterTwo = new ninjaConstructor("Nina")


fighterOne.sayName()
fighterOne.showStats()
fighterTwo.showStats()
fighterOne.punch(fighterTwo)
fighterTwo.kick(fighterTwo, fighterOne)
fighterTwo.punch(fighterOne)
fighterOne.showStats()
fighterTwo.showStats()
fighterOne.drinkSake()
fighterOne.showStats()
