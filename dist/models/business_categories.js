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
exports.business_categories = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let business_categories = exports.business_categories = class business_categories extends sequelize_typescript_1.Model {
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
], business_categories.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(45)
    }),
    __metadata("design:type", String)
], business_categories.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "is_for_group_type",
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
        comment: "เป็นข้อมูลสำหรับ user ประเภท นิคม หรือไม่\n0 = ไม่ใช่ ไม่เป็นนิคม\n1 = เป็นข้อมูลสำหรับนิคม",
        defaultValue: "0"
    }),
    __metadata("design:type", Number)
], business_categories.prototype, "isForGroupType", void 0);
exports.business_categories = business_categories = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "business_categories",
        timestamps: false,
        comment: "เก็บข้อมูลประเภทของธุรกิจ"
    })
], business_categories);
