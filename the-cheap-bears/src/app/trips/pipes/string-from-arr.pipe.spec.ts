import { StringFromArrPipe } from './string-from-arr.pipe';

describe('StringFromArrPipe', () => {
  it('create an instance', () => {
    const pipe = new StringFromArrPipe();
    expect(pipe).toBeTruthy();
  });
});
