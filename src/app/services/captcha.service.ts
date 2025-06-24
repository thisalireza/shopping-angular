import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  generateChallenge(): { operation: string, num1: number, num2: number } {
    const operations = ['+', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    // Generate random numbers between 1 and 9
    let num1: number;
    let num2: number;

    if (operation === '-') {
      // For subtraction, generate num1 first, then num2 must be smaller
      num1 = Math.floor(Math.random() * 8) + 2; // Generate number between 2 and 9
      num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // Generate number smaller than num1
    } else {
      // For other operations, generate random numbers normally
      num1 = Math.floor(Math.random() * 9) + 1;
      num2 = Math.floor(Math.random() * 9) + 1;
    }

    return { operation, num1, num2 };
  }

  verifyAnswer(challenge: { operation: string, num1: number, num2: number }, answer: string): boolean {
    let expectedResult: number;
    switch (challenge.operation) {
      case '+':
        expectedResult = challenge.num1 + challenge.num2;
        break;
      case '-':
        expectedResult = challenge.num1 - challenge.num2;
        break;
      case '*':
        expectedResult = challenge.num1 * challenge.num2;
        break;
      default:
        expectedResult = 0;
    }
    return expectedResult.toString() === answer;
  }
}
