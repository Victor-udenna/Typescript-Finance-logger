import {Hasfommater} from "../Interface/HasFomatter.js"; 
 
 export class Invoice implements Hasfommater {
        constructor(
            readonly client: string,
            private details: string,
            public amount: number
        ){
        }
        format(){
            return `${this.client} owes £${this.amount} for ${this.details}`
        }
    }