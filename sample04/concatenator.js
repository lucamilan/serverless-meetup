export default class Concatenator {
    constructor() {

    }

    async delayed() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("delayed");
                resolve(this._concatCore(...arguments));
            }, 1000);
        });
    }

    async immediate() {
        return new Promise((resolve, reject) => {
            console.log("immediate");
            resolve(this._concatCore(...arguments));
        });
    }

    _concatCore() {
        return [':', ...arguments, ':'].join(' ');
    }
}