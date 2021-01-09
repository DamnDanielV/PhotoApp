import { Router } from "express";
import { photosc } from '../controllers/photosController'

class PhotosRoutes {

    public router:Router = Router();

    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', photosc.photos);
        this.router.get('/:id', photosc.getPhoto);
        this.router.get('/search/:title', photosc.searchPhoto);
        this.router.post('/', photosc.create);
        this.router.put('/:id', photosc.update);
        this.router.delete('/:id', photosc.delete);
    }
}

const photosRoutes = new PhotosRoutes();

export default photosRoutes.router;