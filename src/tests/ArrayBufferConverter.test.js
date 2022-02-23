import ArrayBufferConverter from '../js/ArrayBuffer/ArrayBufferConverter';
import getBuffer from '../js/ArrayBuffer/getBuffer';

describe('ArrayBufferConverter class: ', () => {
  const stringCase = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  test('ArrayBufferConverter should return a string', () => {
    expect(converter.toString()).toBe(stringCase);
  });
});
