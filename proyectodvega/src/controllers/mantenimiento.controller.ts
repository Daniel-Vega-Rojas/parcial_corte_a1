import { Request, Response } from "express";
import { Mantenimiento } from "../models/mantenimientos";

export class MantenimientoController {

    // public parcial(req: Request, res: Response) {
    //     Mantenimiento.findAll({})
    //         .then((mantenimientos: Array<Mantenimiento>) => res.json(mantenimientos))
    //         .catch((err: Error) => res.status(500).json(err));
    // }

    public  async getMantenimeinto (req: Request, res: Response){

        try {
            const mantenimiento = await Mantenimiento.findAll()
            if(!mantenimiento) {
                res.status(400).json({msg: 'mantenimeinto invalid'})
           }
           return res.status(200).json({mantenimiento})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }


}