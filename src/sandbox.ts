import {Invoice} from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/payment.js";
import { Hasfommater } from "./Interface/HasFomatter.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event)=>{

e.preventDefault();

let docs : Hasfommater;

if (type.value === "invoice"){
    docs = new Invoice (tofrom.value, details.value, amount.valueAsNumber)
} else{
    docs = new Payment (tofrom.value, details.value, amount.valueAsNumber)
}

console.log(docs);

list.render(docs, type.value, 'end')
})