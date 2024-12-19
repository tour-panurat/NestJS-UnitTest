import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzBuzzService {
  fizzBuzz(input: number) {
    if (input % 15 === 0) return 'FizzBuzz';

    if (input % 5 === 0) return 'Buzz';

    if (input % 3 === 0) return 'Fizz';

    return input.toString();
  }
}
