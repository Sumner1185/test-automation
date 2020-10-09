import { divide, sum, multiply, subtract } from './calculator';

describe('calculator', () => {

  it('should add two numbers correctly', () => {
    expect(sum(1, 3)).toBe(4);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(3, 1)).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(1, 3)).toBe(3);
  }); 

  it('should divide two numbers correctly', () => {
    expect(divide(4, 2)).toBe(2);
  });

});
