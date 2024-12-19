import { Test, TestingModule } from '@nestjs/testing';
import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzBuzzService],
    }).compile();

    service = module.get<FizzBuzzService>(FizzBuzzService);
  });

  it(`Input 1 must be return string '1' `, () => {
    // arrange
    const input = 1;
    const expected = '1';

    // action
    const result = service.fizzBuzz(input);

    // assert
    expect(result).toBe(expected);
  });

  it(`Input 2 must be return string '2' `, () => {
    // arrange
    const input = 2;
    const expected = '2';

    // action
    const result = service.fizzBuzz(input);

    // assert
    expect(result).toBe(expected);
  });

  it(`Input 4 must be return string '4' `, () => {
    // arrange
    const input = 4;
    const expected = '4';

    // action
    const result = service.fizzBuzz(input);

    // assert
    //guard clause

    expect(result).toBe(expected);
  });

  it(`Input 13 must be return string '13'`, () => {
    // arrange
    const input = 13;
    const expected = '13';

    // action
    const result = service.fizzBuzz(input);

    // assert
    expect(result).toBe(expected);
  });

  describe('Fizz', () => {
    it(`Input 3 must be return string 'Fizz' `, () => {
      // arrange
      const input = 3;
      const expected = 'Fizz';

      // action
      const result = service.fizzBuzz(input);

      // assert

      expect(result).toBe(expected);
    });
    it(`Input 6 must be return string 'Fizz'`, () => {
      // arrange
      const input = 6;
      const expected = 'Fizz';
      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });

    it(`Input 9 must be return string 'Fizz'`, () => {
      // arrange
      const input = 9;
      const expected = 'Fizz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });
  });

  describe('Buzz', () => {
    it(`Input 5 must be return string 'Buzz' `, () => {
      // arrange
      const input = 5;
      const expected = 'Buzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });

    it(`Input 10 must be return string 'Buzz`, () => {
      // arrange
      const input = 10;
      const expected = 'Buzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });
  });

  describe('FizzBuzz', () => {
    it(`Input 15 must be return string 'FizzBuzz'`, () => {
      // arrange
      const input = 15;
      const expected = 'FizzBuzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });

    it(`Input 30 must be return string 'FizzBuzz`, () => {
      // arrange
      const input = 30;
      const expected = 'FizzBuzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });

    it(`Input 45 must be return string 'FizzBuzz`, () => {
      // arrange
      const input = 45;
      const expected = 'FizzBuzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });

    it(`Input 60 must be return string 'FizzBuzz`, () => {
      // arrange
      const input = 60;
      const expected = 'FizzBuzz';

      // action
      const result = service.fizzBuzz(input);

      // assert
      expect(result).toBe(expected);
    });
  });
});
