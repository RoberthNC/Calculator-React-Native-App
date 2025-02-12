import {useRef, useState} from 'react';

enum Operator {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');
  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  // Remove the last number
  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;
    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    return setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal dot
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      // Evaluate if it's another zero and there is not dot
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      // Different from zero, there is not dot, and it's the first number
      if (numberString !== '0' && number.includes('.')) {
        return setNumber(numberString);
      }
      // Avoid 000000
      if (numberString === '0' && !number.includes('.')) return;
      return setNumber(numberString);
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        throw new Error('Operation not implemented');
    }
    setPreviousNumber('0');
  };

  return {
    // Properties
    number,
    previousNumber,
    // Methods
    addOperation,
    buildNumber,
    calculateResult,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    toggleSign,
  };
};
