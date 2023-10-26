import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface causes_accidentsAttributes {
    id?: number;
    name?: string;
}

@Table({
	tableName: "causes_accidents",
	timestamps: false,
	comment: "ตารางเก็บสาเหตุที่เกิดความเสี่ยงในการใช้รถ" 
})
export class causes_accidents extends Model<causes_accidentsAttributes, causes_accidentsAttributes> implements causes_accidentsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "ชื่อสาเหตุ" 
    })
    	name?: string;

}