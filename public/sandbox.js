import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const my = () => {
    console.log(11);
};
form.addEventListener('submit', (e) => {
    my();
    e.preventDefault();
    let value;
    value = [tofrom.value, details.value, amount.valueAsNumber];
    let docs;
    if (type.value === "invoice") {
        docs = new Invoice(...value);
    }
    else {
        docs = new Payment(...value);
    }
    console.log(docs);
    list.render(docs, type.value, 'end');
    form.reset();
});
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const addUId = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUId({ name: "victor", age: 30 });
// let doctwo = addUId('hello')
console.log(docOne);
console.log(docOne.uid);
const user3 = {
    uid: 2,
    name: "victor",
    resource: ResourceType.AUTHOR,
    data: {}
};
const user4 = {
    uid: 2,
    name: 'emmanuel',
    resource: ResourceType.FILM,
    data: ["move", "slide"]
};
console.log(user3);
console.log(user4);
let tup = ["bullmastiff", 30, "food"];
console.log(tup);
