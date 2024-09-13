import { normalizeString } from '../src/string';

test('normalizes a string correctly', () => {
  expect(normalizeString('Hello World!')).toBe('hello-world');
  expect(normalizeString('  Multiple   Spaces  ')).toBe('multiple-spaces');
  expect(normalizeString('Special@#Characters')).toBe('specialcharacters');
});