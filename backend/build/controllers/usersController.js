"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersc = void 0;
//credentials to database
const database_1 = __importDefault(require("../database"));
class UsersController {
    users(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUsers = yield database_1.default.query('SELECT * FROM users');
            res.json(listUsers);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query(`SELECT * FROM users WHERE id=${id}`);
            res.json(user[0]);
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO users set ?', [req.body]);
            res.json({ "added user": true });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE users set ? WHERE id = ?', [req.body, req.params.id]);
            res.json({ 'user updated': true });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM users WHERE id = ?', [req.params.id]);
            res.json({ "user deleted": true });
        });
    }
}
exports.usersc = new UsersController();
