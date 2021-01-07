import { Router } from "express";
import { usersc } from "../controllers/usersController";

class UsersRoutes {

    public router:Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', usersc.users);
        this.router.get('/:id', usersc.getUser);
        this.router.post('/',usersc.addUser);
        this.router.put('/:id', usersc.updateUser);
        this.router.delete('/:id', usersc.deleteUser)
    }
};

const usersRoutes = new UsersRoutes();

export default usersRoutes.router;