import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

//routes
import IndexRoutes from "./routes/index.routes";
import photosRoutes from "./routes/photos.routes";

class Server {

    public app:Application;

    constructor() {
        // atributo de clase app toma las caracteristricas del objeto express
        this.app = express();
        // al iniciar la ejecucion se inician los metodos necesarios
        this.config();
        this.routes();
    };
    // metodo que configura el servidor
    config():any {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    // metodo que define las rutas de la aplicacion
    routes():any {
        this.app.use(IndexRoutes);
        this.app.use('/api/photos', photosRoutes);
    }
    // metodo para inicializar el servidor de backend
    start(): any {
        this.app.listen(this.app.get('port'), () => {
            console.log(`####### Listen on port ${this.app.get('port')} #######`);
        });
    }
};
// instancia un objeto server de calse Server
const server = new Server();

// ejecuta el start de la instancia
server.start();