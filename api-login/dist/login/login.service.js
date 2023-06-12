"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
let LoginService = exports.LoginService = class LoginService {
    constructor() {
        this.logins = [];
    }
    create(createLoginDto) {
        const newLogin = {
            id: this.generateId(),
            email: createLoginDto.email,
            password: createLoginDto.password,
        };
        this.logins.push(newLogin);
        return newLogin;
    }
    findOne(id) {
        return this.logins.find((login) => login.id === id);
    }
    remove(id, deleteLoginDto) {
        const loginIndex = this.logins.findIndex((login) => login.id === id &&
            login.email === deleteLoginDto.email &&
            login.password === deleteLoginDto.password);
        if (loginIndex !== -1) {
            const removedLogin = this.logins.splice(loginIndex, 1);
            return removedLogin[0];
        }
        return null;
    }
    generateId() {
        const maxId = this.logins.reduce((max, login) => (login.id > max ? login.id : max), 0);
        return maxId + 1;
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)()
], LoginService);
//# sourceMappingURL=login.service.js.map