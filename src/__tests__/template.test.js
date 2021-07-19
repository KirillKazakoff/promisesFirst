import GameSavingLoader from '../js/load';
import appFunc from '../js/app';

const example = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
test('check save', async () => {
    const data = await GameSavingLoader.load(example);

    expect.assertions(1);
    expect(data).toBe(example);
});

test('promise successful', async () => {
    const result = await appFunc(example);
    const expected = JSON.parse(example);

    expect.assertions(1);
    expect(result).toEqual(expected);
});

test('promise failled', async () => {
    const result = await appFunc(example + 1);
    const expected = 'parse error';

    expect.assertions(1);
    expect(result).toEqual(expected);
});
