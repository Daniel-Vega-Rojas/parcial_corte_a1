import { Request, Response, Application } from "express";
import { MantenimientoController } from "../controllers/mantenimiento.controller";

export class MantenimientoRoutes {

    public mantenimientocontroller: MantenimientoController = new MantenimientoController();

    public routes(app: Application): void {
        app.route('/mantenimientos').get(this.mantenimientocontroller.getMantenimeinto);

    }

}