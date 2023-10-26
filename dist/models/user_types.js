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
exports.user_types = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let user_types = exports.user_types = class user_types extends sequelize_typescript_1.Model {
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
], user_types.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(255)
    }),
    __metadata("design:type", String)
], user_types.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "is_group",
        allowNull: true,
        type: sequelize_typescript_1.DataType.TINYINT,
        comment: "เป็นชื่อประเภทของ นิคม หรือไม่",
        defaultValue: "0"
    }),
    __metadata("design:type", Number)
], user_types.prototype, "isGroup", void 0);
exports.user_types = user_types = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "user_types",
        timestamps: false,
        comment: "ตารางเก็บข้อมูลประเภทของผู้ใช้"
    })
], user_types);
