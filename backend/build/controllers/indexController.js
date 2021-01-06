"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexc = void 0;
class IndexController {
    index(req, res) {
        res.send("hola index");
    }
}
exports.indexc = new IndexController();
