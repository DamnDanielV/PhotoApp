"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photosController_1 = require("../controllers/photosController");
class PhotosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', photosController_1.photosc.photos);
        this.router.get('/:id', photosController_1.photosc.getPhoto);
        this.router.post('/', photosController_1.photosc.create);
        this.router.put('/:id', photosController_1.photosc.update);
        this.router.delete('/:id', photosController_1.photosc.delete);
    }
}
const photosRoutes = new PhotosRoutes();
exports.default = photosRoutes.router;
