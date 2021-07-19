import GameSavingLoader from './load';

export default function appFunc(obj) {
    return GameSavingLoader.load(obj)
        .then((saving) => JSON.parse(saving))
        .catch(() => 'parse error');
}
