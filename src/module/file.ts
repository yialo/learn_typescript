export type TPerson = {
  name: string;
  age: number;
};

export const greet = (words: string) => {
  console.log(`Hello! ${words}`);
};
