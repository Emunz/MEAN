class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("My name is", this.name)
        return this
    }

    showStats(){
        console.log("Name: " + this.name)
        console.log("Health: " + this.health + " Speed: " + this.speed + " Strength: " + this.strength)
        return this
    }

    drinkSake(){
        this.health += 10
        console.log(this.name + "'s health is now at " + this.health)
        return this
    }

    punch(opponent){
        opponent.health -= 5
        return this
    }
    
    kick(opponent){
        var damage = this.strength * 15
        opponent.health -= damage
        return this
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log(this.name + ' says: "Be Excellent To Each Other"')
        this.drinkSake()
    }
}

const fighterOne = new Ninja("Evan")
const fighterTwo = new Ninja("Nina")

const masterSensei = new Sensei("Bill")
const Ted = new Sensei("Ted")

fighterOne.sayName()
fighterOne.showStats()
fighterTwo.showStats()

masterSensei.sayName()
masterSensei.showStats()
masterSensei.drinkSake()
masterSensei.showStats()

masterSensei.kick(fighterOne)
masterSensei.speakWisdom()
Ted.speakWisdom()
Ted.kick(masterSensei)
masterSensei.showStats()
Ted.showStats()


