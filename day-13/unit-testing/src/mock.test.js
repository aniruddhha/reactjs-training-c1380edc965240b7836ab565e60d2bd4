import { obj } from './handlers'

test('stub .toBeCalled()', () => {
    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();
  });

test('spyOn .toHaveBeenCalled()', () => {
    const spy = jest.spyOn(obj, 'hand');
    obj.hand();
    expect(spy).toHaveBeenCalled();
});