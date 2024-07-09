class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.happiness = 50;
        this.energy = 50;
        this.imageElement = document.getElementById('tamagotchi-img');
        if (!this.imageElement) {
            console.error("Element with ID 'tamagotchi-img' not found");
        }
    }

    feed() {
        this.energy += 10;
        this.updateStatus();
        alert(`${this.name} ha comido. Energía: ${this.energy}`);
    }

    sleep() {
        this.energy += 20;
        this.updateStatus();
        alert(`${this.name} ha dormido. Energía: ${this.energy}`);
    }

    play() {
        if (this.energy > 10) {
            this.happiness += 10;
            this.energy -= 10;
            this.updateStatus();
            alert(`${this.name} ha jugado. Felicidad: ${this.happiness}, Energía: ${this.energy}`);
        } else {
            alert(`${this.name} está demasiado cansado para jugar.`);
        }
    }

    updateStatus() {
        document.getElementById('happiness').innerText = `Felicidad: ${this.happiness}`;
        document.getElementById('energy').innerText = `Energía: ${this.energy}`;
        this.updateImage();
    }

    updateImage() {
        if (this.happiness > 70) {
            this.imageElement.src = 'img/jugando.jpg';
        } else if (this.energy < 20) {
            this.imageElement.src = 'img/aburrido.jpg';
        } else {
            this.imageElement.src = 'img/perro.jpg';
        }
    }

    showStatus() {
        alert(`Estado de ${this.name} - Felicidad: ${this.happiness}, Energía: ${this.energy}`);
    }
}

const tamagotchi = new Tamagotchi(prompt("¿Cómo se llama tu Tamagotchi?"));

function feed() {
    tamagotchi.feed();
}

function sleep() {
    tamagotchi.sleep();
}

function play() {
    tamagotchi.play();
}

function showStatus() {
    tamagotchi.showStatus();
}