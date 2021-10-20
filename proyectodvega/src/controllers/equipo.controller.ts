import { Request, Response } from "express";
import { Equipo } from "../models/equipos";


export class EquipoController {

    // public parcial(req: Request, res: Response) {
    //     Mantenimiento.findAll({})
    //         .then((mantenimientos: Array<Mantenimiento>) => res.json(mantenimientos))
    //         .catch((err: Error) => res.status(500).json(err));
    // }

    public  async getEquipo (req: Request, res: Response){

        try {
            const equipo = await Equipo.findAll()
            if(!equipo) {
                res.status(400).json({msg: 'mantenimeinto invalid'})
           }
           return res.status(200).json({equipo})

        } catch (error) {

            res.status(500).json({msg: 'Error Internal'})

        }
    }


}