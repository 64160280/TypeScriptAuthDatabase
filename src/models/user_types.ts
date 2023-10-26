import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface user_typesAttributes {
    id?: number;
    name?: string;
    isGroup?: number;
}

@Table({
	tableName: "user_types",
	timestamps: false,
	comment: "ตารางเก็บข้อมูลประเภทของผู้ใช้" 
})
export class user_types extends Model<user_typesAttributes, user_typesAttributes> implements user_typesAttributes {

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
    	type: DataType.STRING(255) 
    })
    	name?: string;

    @Column({
    	field: "is_group",
    	allowNull: true,
    	type: DataType.TINYINT,
    	comment: "เป็นชื่อประเภทของ นิคม หรือไม่",
    	defaultValue: "0" 
    })
    	isGroup?: number;

}