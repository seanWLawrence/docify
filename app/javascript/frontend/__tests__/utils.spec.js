import { getBlockTypeFromCharacters } from '../utils';

describe('getBlockTypeFromCharacters', () => {
  it('returns the correct block type for markdown syntax', () => {
    expect(getBlockTypeFromCharacters('*')).toBe('list-item');
    expect(getBlockTypeFromCharacters('-')).toBe('list-item');
    expect(getBlockTypeFromCharacters('+')).toBe('list-item');

    expect(getBlockTypeFromCharacters('>')).toBe('block-quote');

    expect(getBlockTypeFromCharacters('#')).toBe('heading-one');
    expect(getBlockTypeFromCharacters('##')).toBe('heading-two');
    expect(getBlockTypeFromCharacters('###')).toBe('heading-three');
    expect(getBlockTypeFromCharacters('####')).toBe('heading-four');
    expect(getBlockTypeFromCharacters('#####')).toBe('heading-five');
    expect(getBlockTypeFromCharacters('######')).toBe('heading-six');
  });
});
