"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.usersc.users);
        this.router.get('/:id', usersController_1.usersc.getUser);
        this.router.post('/', usersController_1.usersc.addUser);
        this.router.put('/:id', usersController_1.usersc.updateUser);
        this.router.delete('/:id', usersController_1.usersc.deleteUser);
    }
}
;
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
