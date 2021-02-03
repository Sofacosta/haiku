import {Haiku} from './../src/haiku.js';
describe ('Haiku', () => {
  let reusableHaiku;

  beforeEach(() => {
    reusableHaiku = new Haiku('a', 'b', 'c');
  });

  test('should create an haiku object', () => {
    expect(reusableHaiku.line1).toEqual('a');
  });

  test('should check if letters are vowels', () => {
    expect(reusableHaiku.checkVowels()).toEqual(true);
  });
  
});