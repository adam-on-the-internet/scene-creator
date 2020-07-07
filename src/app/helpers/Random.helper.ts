export abstract class RandomHelper {
  public static shuffle(deck: any[]): any[] {
    let currentIndex = deck.length;

    while (0 !== currentIndex) {

      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck;
  }

  public static pickRandomNumber(min: number, max: number): number {
    return Math.floor((Math.random() * max) + min);
  }

  public static pickRandomUniqueNumber(min: number, max: number, selectedNumbers: number[]): number {
    let randomNumber = Math.floor((Math.random() * max) + 1);
    while (selectedNumbers.includes(randomNumber)) {
      randomNumber++;
      if (randomNumber > max) {
        randomNumber = 1;
      }
    }
    return randomNumber;
  }

  public static pickMultipleRandomUniqueNumbers(min: number, max: number, count: number): number[] {
    const uniqueNumbers: number[] = [];

    for (let i = 0; i < count; i++) {
      let randomNumber = this.pickRandomNumber(min, max);

      while (uniqueNumbers.includes(randomNumber)) {
        if (randomNumber === (max -1 )) {
          randomNumber = min;
        } else {
          randomNumber++;
        }
      }

      uniqueNumbers.push(randomNumber);
    }

    return uniqueNumbers;
  }
}
