import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load(obj) {
        return read(obj)
            .then((data) => json(data))
            .then((value) => value);
    }
}
