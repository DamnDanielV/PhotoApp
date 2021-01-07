"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const photos_routes_1 = __importDefault(require("./routes/photos.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class Server {
    constructor() {
        // atributo de clase app toma las caracteristricas del objeto express
        this.app = express_1.default();
        // al iniciar la ejecucion se inician los metodos necesarios
        this.config();
        this.routes();
    }
    ;
    // metodo que configura el servidor
    config() {
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // metodo que define las rutas de la aplicacion
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/api/photos', photos_routes_1.default);
        this.app.use('/api/users', users_routes_1.default);
    }
    // metodo para inicializar el servidor de backend
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`####### Listen on port ${this.app.get('port')} #######`);
        });
    }
}
;
// instancia un objeto server de calse Server
const server = new Server();
// ejecuta el start de la instancia
server.start();
