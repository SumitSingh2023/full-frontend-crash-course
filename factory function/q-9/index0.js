// factory function
function animal(noOfLegs,vegeterian){
    let obj ={}
    obj.noOfLegs = noOfLegs
    obj.vegeterian = vegeterian
    obj.eat = function(){
        return "eating"
    }
    obj.greet = function(){
        return `Hi, I have ${noOfLegs} legs`
    }
    return obj
}

let a1 = animal(4,true)
console.log(a1)
console.log(a1.eat())
console.log(a1.greet())

// constructor function 
function AnimalCF(noOfLegs,vegeterian){
    this.noOfLegs = noOfLegs
    this.vegeterian = vegeterian
    this.eat=function(){
        return "eating..."
    }
    this.greet=function(){
        return `Hi, I have ${noOfLegs} legs` 
    }

}

let animalCF = new AnimalCF(4,true)
console.log(animalCF.eat())

//ES6

class AnimalES6{
    constructor(noOfLegs,vegeterian){
        this.noOfLegs=noOfLegs
        this.vegeterian= vegeterian
        this.eat=function(){
            return "eating..."
        }
        this.greet=function(){
            return `Hi, I have ${noOfLegs} legs`
        }

    }
}

let animales6 = new AnimalES6(4,true)
console.log(animales6.eat())
console.log(animales6.greet())