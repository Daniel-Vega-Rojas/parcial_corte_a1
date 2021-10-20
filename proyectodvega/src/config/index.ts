import express, { Application } from "express";
import morgan from 'morgan';
import { Routes } from '../routes/index';

export class App {

    app:Application;
    public routePrv: Routes = new Routes();

    constructor (
        private port?: number | string
    ){
        this.app = express();
        this.settings();
        this.middlerwares();
        this.routes()
        
    }
    private middlerwares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded( { extended: false}))
    }

    private settings(){
        this.app.set('port', this.port || 3000)

    }
    private routes (){
        this.routePrv.mantenimientoRoutes.routes(this.app)
        this.routePrv.equipoRoutes.routes(this.app)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor Daniel Vega Rojas',this.app.get('port'));
    }


}