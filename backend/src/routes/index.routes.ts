import { Router } from "express";
import { indexc } from '../controllers/indexController';

class indexRoutes {

    public router:Router = Router();

    constructor() {

        this.config();
    }

    config() {
        this.router.get('/', indexc.index);
    }
}

const IndexRoutes = new indexRoutes();

export default IndexRoutes.router;