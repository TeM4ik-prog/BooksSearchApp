"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.account = void 0;
const appwrite_1 = require("appwrite");
const client = new appwrite_1.Client()
    .setEndpoint('http://localhost:3000')
    .setProject('66ae610100071f6817d2');
exports.client = client;
const account = new appwrite_1.Account(client);
exports.account = account;
//# sourceMappingURL=appwrite.js.map