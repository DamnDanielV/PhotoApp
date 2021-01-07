import { Request, Response } from "express";

//credentials to database
import db from "../database";

class UsersController {

    public async users (req:Request, res:Response) {
        const listUsers = await db.query('SELECT * FROM users')
        res.json(listUsers);
    }

    public async getUser (req:Request, res:Response) {
        const { id } = req.params;
        const user = await db.query(`SELECT * FROM users WHERE id=${id}`);
        res.json(user[0]);
    }

    public async addUser (req:Request, res:Response) {

        await db.query('INSERT INTO users set ?', [req.body]);
        res.json({"added user": true});
    }

    public async updateUser (req:Request, res:Response) {
        await db.query('UPDATE users set ? WHERE id = ?', [req.body, req.params.id]);
        res.json({'user updated': true});
    }

    public async deleteUser (req:Request, res:Response) {
        await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        res.json({"user deleted": true});
    }
}

export const usersc = new UsersController();