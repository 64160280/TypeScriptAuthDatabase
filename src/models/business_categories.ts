import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface business_categoriesAttributes {
    id?: number;
    name?: string;
    isForGroupType?: number;
}

@Table({
	tableName: "business_categories",
	timestamps: false,
	comment: "เก็บข้อมูลประเภทของธุรกิจ" 
})
export class business_categories extends Model<business_categoriesAttributes, business_categoriesAttributes> implements business_categoriesAttributes {

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
    	type: DataType.STRING(45) 
    })
    	name?: string;

    @Column({
    	field: "is_for_group_type",
    	allowNull: true,
    	type: DataType.TINYINT,
    	comment: "เป็นข้อมูลสำหรับ user ประเภท นิคม หรือไม่\n0 = ไม่ใช่ ไม่เป็นนิคม\n1 = เป็นข้อมูลสำหรับนิคม",
    	defaultValue: "0" 
    })
    	isForGroupType?: number;

}