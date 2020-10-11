function Station(name){
    this.name = name
    this.turnOn = function(){
        console.log(`${this.name} включен в сеть`)
    },
        this.turnOff = function(){
            console.log(`${this.name} выключен из сети`)
        }
}

Station.prototype.powerConsumption = function(){
    this.name = this.name + "а"
    console.log(`Потребляемая мощность ${this.name} равна ${this.amperage * this.voltage} Вт`)
}

function Laptop(amperage, voltage){
    this.amperage = amperage,
        this.voltage = voltage,
        this.volume = "1000 ГБ"
}

Laptop.prototype = new Station("Компьютер")

function Fridge(amperage, voltage){
    this.amperage = amperage,
        this.voltage = voltage,

        this.freezer = function(){
            console.log("Включен режим заморозки")
        }
}

Fridge.prototype = new Station("Холодильник")

const comp = new Laptop(15, 220)
const freezer = new Fridge(25, 220)


freezer.turnOn()
freezer.freezer()
freezer.powerConsumption()

comp.turnOff()
comp.powerConsumption()
console.log(comp.volume)