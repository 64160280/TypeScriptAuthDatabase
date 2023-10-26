import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface road_safetiesAttributes {
    id?: number;
    usId?: number;
    name?: string;
    forYears?: number;
    introdution?: string;
    objective?: string;
    detail?: string;
}

@Table({
	tableName: "road_safeties",
	timestamps: false,
	comment: "ตารางเก็บข้อมูลมาตรการความปลอดภัยในการใช้รถของโรงงานหรือนิคม" 
})
export class road_safeties extends Model<road_safetiesAttributes, road_safetiesAttributes> implements road_safetiesAttributes {

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
    	field: "us_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "สร้างโดยใคร" 
    })
    @Index({
    	name: "fk_road_safeties_users1_idx",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	usId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255),
    	comment: "ชื่อมาตรการ" 
    })
    	name?: string;

    @Column({
    	field: "for_years",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ประกาศใช้ในปี" 
    })
    	forYears?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "ข้อมูลที่มา" 
    })
    	introdution?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "ข้อมูลวัตถุประสงค์" 
    })
    	objective?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING,
    	comment: "รายละเอียดอื่นๆ เพิ่มเติม" 
    })
    	detail?: string;

}