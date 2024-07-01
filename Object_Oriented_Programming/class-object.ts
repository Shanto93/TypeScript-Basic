class Animal{
    name: string;
    species: string;
    sounds: string;

    constructor(name: string, species: string, sounds: string)
    {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    makesound()
    {
        console.log(`${this.name} sounds like ${this.sounds}`);
    }
}

const dog = new Animal("Fido", "Dog", "Ghew Ghew");
dog.makesound();