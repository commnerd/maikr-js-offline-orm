abstract class Model {

    protected primaryKey: string = "id";

    private modelFields: Array<string> = ['initValues', 'primaryKey', 'values'];

    private initValues: Object = {};

    constructor() {
        for(let key in this.getClassKeys()) {
            // this.initValues[key] = this[key];
        }
    }

    private getClassKeys(): Array<string> {
        let saveKeys = [];
        for(let key in this) {
            if(this.hasOwnProperty(key) && key !in this.modelFields) {
                saveKeys.push(key);
            }
        }
        return saveKeys;
    }
}