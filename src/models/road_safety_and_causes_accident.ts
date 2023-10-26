import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface road_safety_and_causes_accidentAttributes {
    rsacaRsId: number;
    rsacaCaId: number;
    rsacaPercentage?: string;
}

@Table({
	tableName: "road_safety_and_causes_accident",
	timestamps: false,
	comment: "ตารางเก็บความสัมพันธ์ในมาตรการและสาเหตุ" 
})
export class road_safety_and_causes_accident extends Model<road_safety_and_causes_accidentAttributes, road_safety_and_causes_accidentAttributes> implements road_safety_and_causes_accidentAttributes {

    @Column({
    	field: "rsaca_rs_id",
    	primaryKey: true,
    	type: DataType.INTEGER,
    	comment: "ตาราง road_safeties" 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	rsacaRsId!: number;

    @Column({
    	field: "rsaca_ca_id",
    	primaryKey: true,
    	type: DataType.INTEGER,
    	comment: "ตาราง causes_accidents" 
    })
    @Index({
    	name: "fk_road_safety_and_causes_accident_causes_accidents_idx",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    	rsacaCaId!: number;

    @Column({
    	field: "rsaca_percentage",
    	allowNull: true,
    	type: DataType.DECIMAL(11,2),
    	comment: "ร้อยละของความเกิดอุบัติเหตุ" 
    })
    	rsacaPercentage?: string;

}