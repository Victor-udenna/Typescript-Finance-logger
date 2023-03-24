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

const my =():void=> {
console.log(11)
}

form.addEventListener('submit', (e: Event)=>{
  my()
e.preventDefault();
let value : [string, string, number]

value = [tofrom.value, details.value, amount.valueAsNumber];

let docs : Hasfommater;

if (type.value === "invoice"){
    docs = new Invoice (...value)
} else{
    docs = new Payment (...value)
}

console.log(docs);

list.render(docs, type.value, 'end')
 
form.reset()

})




enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}



const addUId =  <T extends object>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUId({name: "victor", age: 30});
// let doctwo = addUId('hello')

console.log(docOne);
console.log(docOne.uid)

interface Resourse<T>  {
    uid: number;
    name: string;
    resource: ResourceType ;
    data: T;
}

const user3: Resourse <object> = {
    uid: 2,
    name: "victor",
    resource: ResourceType.AUTHOR ,
    data: {}
}
const user4: Resourse <string []> = {
    uid: 2,
    name: 'emmanuel',
    resource: ResourceType.FILM ,
    data: ["move", "slide"]
}

console.log(user3);
console.log(user4);

let tup : [string, number, string] = ["bullmastiff", 30, "food"];

console.log(tup);