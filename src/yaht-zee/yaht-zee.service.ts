import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtZeeService {
  sumByTarget(input: number[], target: number): number {
    if (!Array.isArray(input)) return 0;

    return input.filter((item) => item === target).length * target;
  }
}
