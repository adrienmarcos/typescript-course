// string, number, boolean, null, undefined
let myName: string | null = '';
myName = '5';

// Arrays
const items: (string | number)[] = ['test', 10];

// Interfaces
interface IAccount {
  name: string,
  balance: number,
  status?: boolean

  deposit?: (value: number) => void
};

// Objects
const firstAccount: IAccount = {
  name: 'Luis',
  balance: 10
};

const secondAccount: IAccount = {
  name: 'Paul',
  balance: 20
};

let accounts: IAccount[] = [firstAccount, secondAccount];
