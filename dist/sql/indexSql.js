"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class query {
    test() {
        let stringQuery = "";
        stringQuery += " SELECT 'this is test...' ";
        stringQuery += " AS TEST ";
        return stringQuery;
    }
    ;
}
let indexQuery = new query();
exports.default = indexQuery;
