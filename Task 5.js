class Station{
    constructor(name){
        this.name = name;

        this.turnOn = function(){
            console.log(`${this.name} включен в сеть`)
        }
        this.turnOff = function(){
            console.log(`${this.name} выключен из сети`)
        }
        this.powerConsumption = function(){

            this.name = this.name + "а"
            console.log(`Потребляемая мощность ${this.name} равна ${this.amperage * this.voltage} Вт`)
        }
    }
}



class Laptop extends Station{
    constructor(name, amperage, voltage){
        super(name);
        this.amperage = amperage;
        this.voltage = voltage;
        this.volume = "1000 ГБ";
    }
}


class Fridge extends Station{
    constructor(name, amperage, voltage){
        super(name);
        this.amperage = amperage;
        this.voltage = voltage;

    }
    freezer = function(){
        console.log("Включен режим заморозки")
    }
}


const comp = new Laptop("Компьютер", 15, 220)
const freezer = new Fridge("Холодильник", 25, 220)

freezer.turnOn()
freezer.freezer()
freezer.powerConsumption()

comp.turnOff()
comp.powerConsumption()
console.log(comp.volume)

// Есть небольшой недочет: не забывайте присваивать свойства именно к this, чтобы свойство относились к экземпляру класса, а не к самому классу в целом. Выше поправила