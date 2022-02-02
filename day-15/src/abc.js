import { Pqr } from './pqr'
export class Abc {

    constructor(pqr = new Pqr()) {
        this.pqr = pqr
    }

    toAbc() {
        console.log('toAbc')
        this.pqr.toPqr()
    }

    toAll() {
        this.toAbc()
    }
}