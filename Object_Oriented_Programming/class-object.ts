class Animal {
  // name: string;
  // species: string;
  // sounds: string;

  //Using Parameter Property
  constructor(
    public name: string,
    public species: string,
    public sounds: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sounds = sounds;
  }
  makesound() {
    console.log(`${this.name} sounds like ${this.sounds}`);
  }
}

const dog = new Animal("Fido", "Dog", "Ghew Ghew");
const cat = new Animal("Tommy", "Cat", "Meaw Meaw");

dog.makesound();
cat.makesound();
