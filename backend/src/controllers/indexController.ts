import { Request, Response } from 'express';

class IndexController {
    public index (req:Request, res:Response) {
        res.send("hola index");
    }
}
export const indexc = new IndexController();
