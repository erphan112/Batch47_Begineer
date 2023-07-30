"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = 'Irfan ali';
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
console.log(titleCase(myName));
//# sourceMappingURL=Exc3.js.map