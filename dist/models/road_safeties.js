"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.road_safeties = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let road_safeties = exports.road_safeties = class road_safeties extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    (0, sequelize_typescript_1.Index)({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true
    }),
    __metadata("design:type", Number)
], road_safeties.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "us_id",
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: "สร้างโดยใคร"
    }),
    (0, sequelize_typescript_1.Index)({
        name: "fk_road_safeties_users1_idx",
        using: "BTREE",
        order: "ASC",
        unique: false
    }),
    __metadata("design:type", Number)
], road_safeties.prototype, "usId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(255),
        comment: "ชื่อมาตรการ"
    }),
    __metadata("design:type", String)
], road_safeties.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "for_years",
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: "ประกาศใช้ในปี"
    }),
    __metadata("design:type", Number)
], road_safeties.prototype, "forYears", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
        comment: "ข้อมูลที่มา"
    }),
    __metadata("design:type", String)
], road_safeties.prototype, "introdution", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
        comment: "ข้อมูลวัตถุประสงค์"
    }),
    __metadata("design:type", String)
], road_safeties.prototype, "objective", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
        comment: "รายละเอียดอื่นๆ เพิ่มเติม"
    }),
    __metadata("design:type", String)
], road_safeties.prototype, "detail", void 0);
exports.road_safeties = road_safeties = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "road_safeties",
        timestamps: false,
        comment: "ตารางเก็บข้อมูลมาตรการความปลอดภัยในการใช้รถของโรงงานหรือนิคม"
    })
], road_safeties);
