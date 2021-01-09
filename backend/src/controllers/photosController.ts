import { Request, Response } from 'express';
import db from "../database";

class PhotosController {
    //metodo para listar las fotos de un usuario

    public async photos (req:Request, res:Response) {
        const listPhotos = await db.query('SELECT * FROM photos');
        res.json(listPhotos);
    }

    public async getPhoto (req:Request, resp:Response) {
        const { id } = req.params;
        const onePhoto = await db.query(`SELECT * FROM photos WHERE id=${id}`);
        if (onePhoto.length > 0) {
            resp.json(onePhoto[0]);
        } else {
            resp.status(404).json({found: false});
        }
    }

    public async searchPhoto (req:Request, resp:Response) {
        const { title } = req.params;
        console.log(title);
        const photos = await db.query(`SELECT * FROM photos WHERE title='${title}'`);
        resp.json(photos);            
        

    }
    //metodo para agragar fotos a la base de datos
    public async create (req:Request, res:Response) {
        await db.query('INSERT INTO photos set ?',[req.body])
        res.json({saved:true})
    }

    public async update (req:Request, resp:Response) {
        await db.query('UPDATE photos set ? WHERE id = ?', [req.body, req.params.id]);
        resp.json({"updated": true});
    }

    public async delete (req:Request, resp:Response) {
        const { id } = req.params;
        await db.query(`DELETE FROM photos WHERE id=${id}`);
        resp.json({"delete": true});
    }
}
export const photosc = new PhotosController();
