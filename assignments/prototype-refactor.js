/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(gameAttributes){
        this.name = gameAttributes.name
        this.dimensions = gameAttributes.dimensions
        this.createdAt = gameAttributes.createdAt
    }
    destroy() {
        return `destroy ${this.name}`
    }

}

class CharacterStats extends GameObject {

    constructor(characterStatsAttributes) {
        // link child to parent for inheritance
        super(characterStatsAttributes)
        this.healthPoints = characterStatsAttributes.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage`
    }
}

var a = new GameObject({
    name: "object a",
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
  }})

  var b = new CharacterStats({
      createdAt: new Date(),
      healthPoints: 2,
      name: "object b",
      dimensions: {
          length: 4,
          width: 2,
          height: 2,
    }
    })

console.log(b.destroy())
  console.log(b.takeDamage())


  class Humanoid extends CharacterStats{
    constructor(humanoidAttributes) {
        super(humanoidAttributes)

        this.team = humanoidAttributes.team
        this.weapons = humanoidAttributes.weapons
        this.language = humanoidAttributes.language
        this.name = humanoidAttributes.name
        this.dimensions = humanoidAttributes.dimensions
        this.healthPoints = humanoidAttributes.healthPoints
    }
    greet(){
        return `${this.name} greets in ${this.language}`
    }


  }
  var c = new Humanoid({
      team: "team x",
      weapons: "gun",
      language: "spanish",
      name: "no name",
      createdAt: "no time",
      dimensions : "no mass",
      healthPoints: "no health"
  })

  console.log(c.takeDamage())
  console.log(c.destroy())

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });


  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  class Villain extends Humanoid {
      constructor(villainAttributes) {
          super(villainAttributes)

          this.name = villainAttributes.name
          this.human = villainAttributes.human
      }
      // fixed spelling error
      VillainRemoveHealth(damage, hero) {

        if(hero.healthPoints > 0) {
            hero.healthPoints -= damage
            if(hero.healthPoints === 0) {
              // console.log("here")
              return hero.destroy()
      
            } else {
              return `${hero.name} is still alive`
            }
      
          } else {
            return hero.destroy()
          }
        }
  }

  class Hero extends Humanoid {
      constructor(heroAttributes) {
          super(heroAttributes)

          this.name = heroAttributes.name
          this.human = heroAttributes.human
      }
      HeroRemoveHealth(damage, villain) {
        if(villain.healthPoints > 0) {
            villain.healthPoints -= damage
            if(villain.healthPoints === 0) {
              // console.log("here")
              return villain.destroy()
      
            } else {
              return `${villain.name} is still alive`
            }
      
          } else {
            return villain.destroy()
          }
      }
  }

  console.log("stretch goal")

  let swordsmanHero = new Hero({
    name: "a good name",
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const mageVillain = new Villain({
    name: "really bad name",
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  console.log(swordsmanHero.HeroRemoveHealth(4, mageVillain))
  console.log(mageVillain.VillainRemoveHealth(5, swordsmanHero))
  console.log(swordsmanHero.HeroRemoveHealth(1, mageVillain))
