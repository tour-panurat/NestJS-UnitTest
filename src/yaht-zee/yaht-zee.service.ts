import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtZeeService {
  sumByTarget(input: number[], target: number): number {
    if (input.length !== 5) return 0;

    if (target > 6 || target < 1) return 0;

    if (!Array.isArray(input)) return 0;

    return (
      input.filter((item) => {
        if (item > 6 || item < 1) return 0;
        return item === target;
      }).length * target
    );
  }
  sumScoreThreeOfKind(input: number[]): number {
    // First
    // O(n^2)
    // let result = 0;
    // for (let i = 0; i < input.length; i++) {
    //   let count = 0;
    //   for (let j = 0; j < input.length; j++) {
    //     if (input[i] === input[j]) {
    //       count++;
    //     }

    //     if (count === 3) {
    //       result = input[i] * 3;
    //     }
    //   }
    // }
    // return result;

    // O(6n)
    // const target = [1, 2, 3, 4, 5, 6];
    // for (let i = 0; i < target.length; i++) {
    //   const check = input.filter((item) => item === target[i]);
    //   if (check.length === 3) return target[i] * 3;
    // }
    // return 0;

    // O(3n)
    let numberToCheck = input[0];
    let countOfNumber = input.filter((item) => item === numberToCheck).length;
    if (countOfNumber >= 3) return numberToCheck * 3;

    numberToCheck = input[1];
    countOfNumber = input.filter((item) => item === numberToCheck).length;
    if (countOfNumber >= 3) return numberToCheck * 3;

    numberToCheck = input[2];
    countOfNumber = input.filter((item) => item === numberToCheck).length;
    if (countOfNumber >= 3) return numberToCheck * 3;
  }

  sumScoreFourOfKind(input: number[]): number {
    // First
    // let result = 0;
    // for (let i = 0; i < input.length; i++) {
    //   let count = 0;
    //   for (let j = 0; j < input.length; j++) {
    //     if (input[i] === input[j]) {
    //       count++;
    //     }

    //     if (count === 4) {
    //       result = input[i] * 4;
    //     }
    //   }
    // }
    // return result;

    let numberToCheck = input[0];
    let countOfNumber = input.filter((item) => item === numberToCheck).length;
    if (countOfNumber >= 4) return numberToCheck * 4;

    numberToCheck = input[1];
    countOfNumber = input.filter((item) => item === numberToCheck).length;
    if (countOfNumber >= 4) return numberToCheck * 4;
  }

  scoreFullHouse(input: number[]): number {
    const target = [1, 2, 3, 4, 5, 6];
    let twoDuplicateNumber = false;
    let threeDuplicateNumber = false;
    for (let i = 0; i < target.length; i++) {
      const countOfNumber = input.filter((item) => item === target[i]);
      if (countOfNumber.length >= 2) twoDuplicateNumber = true;
      if (countOfNumber.length >= 3) threeDuplicateNumber = true;
    }
    return twoDuplicateNumber && threeDuplicateNumber ? 25 : 0;
  }

  scoreSmallStraight(input: number[]): number {
    // const sortNumber = input.sort((a, b) => a - b);
    // console.log(sortNumber);
    // // เรียงหน้า
    // if (
    //   sortNumber[0] === 1 &&
    //   sortNumber[1] === 2 &&
    //   sortNumber[2] === 3 &&
    //   sortNumber[3] === 4
    // ) {
    //   return 30;
    // }
    // if (
    //   sortNumber[0] === 2 &&
    //   sortNumber[1] === 3 &&
    //   sortNumber[2] === 4 &&
    //   sortNumber[3] === 5
    // ) {
    //   return 30;
    // }

    // if (
    //   sortNumber[0] === 3 &&
    //   sortNumber[1] === 4 &&
    //   sortNumber[2] === 5 &&
    //   sortNumber[3] === 6
    // ) {
    //   return 30;
    // }

    // // เรียงหลัง
    // if (
    //   sortNumber[1] === 2 &&
    //   sortNumber[2] === 3 &&
    //   sortNumber[3] === 4 &&
    //   sortNumber[4] === 5
    // ) {
    //   return 30;
    // }

    // if (
    //   sortNumber[1] === 3 &&
    //   sortNumber[2] === 4 &&
    //   sortNumber[3] === 5 &&
    //   sortNumber[4] === 6
    // ) {
    //   return 30;
    // }

    // return 0;

    const sortNumber = input.sort((a, b) => a - b);

    switch (sortNumber.join(',')) {
      case '1,2,3,4,5':
      case '1,2,3,4,6':
      case '2,3,4,5,6':
        return 30;
      default:
        switch (sortNumber.slice(1).join(',')) {
          case '2,3,4,5':
          case '3,4,5,6':
            return 30;
          default:
            return 0;
        }
    }
  }

  scoreLargeStraight(input: number[]): number {
    // const sortNumber = input.sort((a, b) => a - b);
    // if (
    //   sortNumber[0] === 1 &&
    //   sortNumber[1] === 2 &&
    //   sortNumber[2] === 3 &&
    //   sortNumber[3] === 4 &&
    //   sortNumber[4] === 5
    // ) {
    //   return 40;
    // }
    // if (
    //   sortNumber[0] === 2 &&
    //   sortNumber[1] === 3 &&
    //   sortNumber[2] === 4 &&
    //   sortNumber[3] === 5 &&
    //   sortNumber[4] === 6
    // ) {
    //   return 40;
    // }
    // return 0;

    const sortNumber = input.sort((a, b) => a - b);
    switch (sortNumber.join(',')) {
      case '1,2,3,4,5':
      case '2,3,4,5,6':
        return 40;
      default:
        return 0;
    }
  }

  scoreChance(input: number[]): number {
    return input.reduce((a, b) => a + b);
  }

  scoreYAHTZEE(input: number[]): number {
    // const target = input[0];
    // const checkDuplicateNumber = input.filter((item) => item === target).length;
    // if (checkDuplicateNumber === 5) {
    //   return 50;
    // }
    // return 0;

    return input.filter((item) => item === input[0]).length === 5 ? 50 : 0;
  }

  sumScore(input: number[]): number[] {
    const result = [
      this.sumScoreThreeOfKind(input),
      this.sumScoreFourOfKind(input),
      this.scoreFullHouse(input),
      this.scoreSmallStraight(input),
      this.scoreLargeStraight(input),
      this.scoreChance(input),
      this.scoreYAHTZEE(input),
    ];
    console.log(result);

    return result;
  }
}
