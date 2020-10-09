import { sum } from './calculator';

describe('calculator', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 3)).toBe(4);
  });
});
