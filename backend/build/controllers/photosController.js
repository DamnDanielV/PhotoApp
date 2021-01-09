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
exports.photosc = void 0;
const database_1 = __importDefault(require("../database"));
class PhotosController {
    //metodo para listar las fotos de un usuario
    photos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPhotos = yield database_1.default.query('SELECT * FROM photos');
            res.json(listPhotos);
        });
    }
    getPhoto(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const onePhoto = yield database_1.default.query(`SELECT * FROM photos WHERE id=${id}`);
            if (onePhoto.length > 0) {
                resp.json(onePhoto[0]);
            }
            else {
                resp.status(404).json({ found: false });
            }
        });
    }
    searchPhoto(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.params;
            console.log(title);
            const photos = yield database_1.default.query(`SELECT * FROM photos WHERE title='${title}'`);
            resp.json(photos);
        });
    }
    //metodo para agragar fotos a la base de datos
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO photos set ?', [req.body]);
            res.json({ saved: true });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE photos set ? WHERE id = ?', [req.body, req.params.id]);
            resp.json({ "updated": true });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query(`DELETE FROM photos WHERE id=${id}`);
            resp.json({ "delete": true });
        });
    }
}
exports.photosc = new PhotosController();
