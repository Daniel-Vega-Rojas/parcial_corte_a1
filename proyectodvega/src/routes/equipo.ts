import { Request, Response, Application } from "express";
import { EquipoController } from "../controllers/equipo.controller";

export class EquipoRoutes {

    public equipocontroller: EquipoController = new EquipoController();

    public routes(app: Application): void {
        app.route('/equipos').get(this.equipocontroller.getEquipo);
        

    }
    
}