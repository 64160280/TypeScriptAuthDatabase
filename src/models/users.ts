import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface usersAttributes {
    id?: number;
    name?: string;
    utId?: number;
    bcId?: number;
    detail?: string;
    regisDate?: Date;
	username?: string; // เพิ่มคอลัมน์ username
	password?: string; // เพิ่มคอลัมน์ password
}

@Table({
	tableName: "users",
	timestamps: false 
})
export class users extends Model<usersAttributes, usersAttributes> implements usersAttributes {

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
    	field: "ut_id",
    	allowNull: true,
    	type: DataType.INTEGER,
    	comment: "ตาราง user_types" 
    })
    @Index({
    	name: "fk_users_user_types1_idx",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	utId?: number;

    @Column({
    	field: "bc_id",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "fk_users_business_categories1_idx",
    	using: "BTREE",
    	order: "ASC",
    	unique: false 
    })
    	bcId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	detail?: string;

    @Column({
    	field: "regis_date",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	regisDate?: Date;


	@Column({
		allowNull: true,
		type: DataType.STRING(255)
	})
		username?: string;
		
	@Column({
		allowNull: true,
		type: DataType.STRING(255) // เราใช้ STRING สำหรับรหัสผ่าน แต่ควรเข้ารหัสรหัสผ่านก่อนเก็บลงในฐานข้อมูล
	})
		password?: string;	
		
}