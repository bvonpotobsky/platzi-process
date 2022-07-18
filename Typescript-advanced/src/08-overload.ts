// 1) fn: Nico => [N, i, c, o]

// 2) fn: [N, i, c, o] => Nico

function parseString(input: string): string[];
function parseString(input: string[]): string;
function parseString(input: number): boolean;

function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // => :string
  }

  if (typeof input === 'string') {
    return input.split(''); // => :string[]
  }

  return true;
}

const getArrayOfName = parseString('Nico');
const getStringOfArray = parseString(['N', 'i', 'c', 'o']);

console.log({ getArrayOfName, getStringOfArray });

export default parseString;
