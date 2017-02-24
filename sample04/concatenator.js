export default class Concatenator {
    constructor() {

    }

    async delayed() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._concatCore(...arguments));
            }, 5000);
        });
    }

    async immediate() {
        return new Promise((resolve, reject) => {
            resolve(this._concatCore(...arguments));
        });
    }

    _concatCore() {
        return [':', ...arguments, ':'].join(' ');
    }
}