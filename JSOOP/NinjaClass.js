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

var Ninja = new ninjaConstructor("Evan")

Ninja.sayName()
Ninja.showStats()
Ninja.drinkSake()
Ninja.showStats()