
export default class Builder {
    constructor() {
    }

    async build() {
        return new Promise((resolve,reject)=>{
            const result = ['<=====',...arguments, '=====>'].join(' ');
            return resolve(result);
        });
    }
}