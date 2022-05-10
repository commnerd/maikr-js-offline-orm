class ControlClass {
    target: any;
    constructor() {
        for(let prop in this.target) {
            (this as unknown as typeof this.target)[prop] = this.target[prop];
        }
    }
}

export function Model(target: any) {
    let cls = typeof target;
    let retVal = class cls extends ControlClass {
        prototype = target.prototype;
    }

    return retVal as typeof target;
}