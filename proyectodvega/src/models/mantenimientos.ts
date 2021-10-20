import {Model, DataTypes} from 'sequelize';

import { database } from '../database/db';
import { Equipo } from './equipos';

export class Mantenimiento extends Model {
    public fecha!: Date;
    public descripcion!: string;
    public resultados!: boolean;
}

export interface MantenimientoI {
    fecha: Date;
    descripcion: string;
    resultados: boolean;
}

Mantenimiento.init (
    {
    
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },

        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },

        resultados: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        
    },
    {
        tableName: "mantenimientos",
        sequelize: database,
        timestamps: true
    }
);

Equipo.hasMany(Mantenimiento);
Mantenimiento.belongsTo(Equipo);

