import {Hasfommater} from "../Interface/HasFomatter.js"; 
 
 export class Payment implements Hasfommater {
        constructor(
            readonly recipient: string,
            private details: string,
            public amount: number
        ){
        }
        format(){
            return `${this.recipient}  paid £${this.amount} for ${this.details}`
        }
    }