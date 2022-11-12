// string, number, boolean, null, undefined
let myName: string | null = '';
myName = '5';

// Arrays
const items: (string | number)[] = ['test', 10];

// Objects
const account: {
  name: string,
  balance: number,
  status?: boolean
} = {
  name: 'Luis',
  balance: 10
};