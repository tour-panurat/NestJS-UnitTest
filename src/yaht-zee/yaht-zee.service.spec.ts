import { Test, TestingModule } from '@nestjs/testing';
import { YahtZeeService } from './yaht-zee.service';

describe('YahtZeeService', () => {
  let service: YahtZeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YahtZeeService],
    }).compile();

    service = module.get<YahtZeeService>(YahtZeeService);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [1,1,1,1,1] โดยที่ target = 1 แล้วผลรวมจะต้องเป็น 5 `, () => {
    // arrange
    const input = [1, 1, 1, 1, 1];
    const target = 1;
    const expectedResult = 5;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [2,2,2,2,2] โดยที่ target = 1 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [2, 2, 2, 2, 2];
    const target = 1;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [1,2,3,4,5] โดยที่ target = 2 แล้วผลรวมจะต้องเป็น 2 `, () => {
    // arrange
    const input = [1, 2, 3, 4, 5];
    const target = 2;
    const expectedResult = 2;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [1, 1, 3, 4, 5] โดยที่ target = 2 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [1, 1, 3, 4, 5];
    const target = 2;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [3, 3, 1, 4, 5] โดยที่ target = 3 แล้วผลรวมจะต้องเป็น 6 `, () => {
    // arrange
    const input = [3, 3, 1, 4, 5];
    const target = 3;
    const expectedResult = 6;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [2, 1, 1, 4, 5] โดยที่ target = 3 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [2, 1, 1, 4, 5];
    const target = 3;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [1, 1, 4, 4, 4] โดยที่ target = 4 แล้วผลรวมจะต้องเป็น 12 `, () => {
    // arrange
    const input = [1, 1, 4, 4, 4];
    const target = 4;
    const expectedResult = 12;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [2, 3, 5, 6, 6] โดยที่ target = 4 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [2, 3, 5, 6, 6];
    const target = 4;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [5, 1, 5, 5, 5] โดยที่ target = 5 แล้วผลรวมจะต้องเป็น 20 `, () => {
    // arrange
    const input = [5, 1, 5, 5, 5];
    const target = 5;
    const expectedResult = 20;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [1, 2, 3, 4, 6] โดยที่ target = 5 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [1, 2, 3, 4, 6];
    const target = 5;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [6, 6, 6, 3, 3] โดยที่ target = 6 แล้วผลรวมจะต้องเป็น 18 `, () => {
    // arrange
    const input = [6, 6, 6, 3, 3];
    const target = 6;
    const expectedResult = 18;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`หน้าลูกเต๋าทั้งหมดเป็น [2, 3, 4, 5, 1] โดยที่ target = 6 แล้วผลรวมจะต้องเป็น 0 `, () => {
    // arrange
    const input = [2, 3, 4, 5, 1];
    const target = 6;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`ตัวเลขที่นอกเหนือจากหน้าลูกเต๋า [7,7,7,7,7] โดยที่ target เป็น 6  ผลลัพธ์จะต้องเป็น 0 `, () => {
    // arrange
    const input = [7, 7, 7, 7, 7];
    const target = 6;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });

  it(`ตัวเลขที่นอกเหนือจากหน้าลูกเต๋า [7,7,7,7,7] โดยที่ target เป็น 7 ผลลัพธ์จะต้องเป็น 0 `, () => {
    // arrange
    const input = [7, 7, 7, 7, 7];
    const target = 7;
    const expectedResult = 0;

    // action
    const result = service.sumByTarget(input, target);

    // assert
    expect(result).toBe(expectedResult);
  });
});
