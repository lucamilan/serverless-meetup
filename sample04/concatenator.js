export default class Concatenator {
    constructor() {

    }

    async delayed() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this._concatCore(...arguments);
                console.log(result);
                resolve(result);
            }, 5000);
        });
    }

    async immediate() {
        return new Promise((resolve, reject) => {
            const result = this._concatCore(...arguments);
            console.log(result);
            resolve(result);
        });
    }

    _concatCore() {
        return [':', ...arguments, ':'].join(' ');
    }
}